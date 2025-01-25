'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/components/auth/auth-provider'
import { jollyLodgerFont } from '@/styles/fonts'
import { supabase } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const { loading } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')

  const handleResendConfirmation = async () => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: formData.email,
      })
      if (error) throw error
      setInfo('Confirmation email sent! Please check your inbox.')
    } catch (error) {
      console.error('Error sending confirmation:', error)
      setError('Unable to send confirmation email. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setInfo('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      
      if (signInError) {
        // Handle specific error cases
        if (signInError.message.includes('Email not confirmed')) {
          setError('Please confirm your email address to login.')
          setInfo('Need a new confirmation email?')
          return
        }
        if (signInError.message.includes('Invalid login credentials')) {
          setError('Invalid email or password')
          return
        }
        setError('Unable to sign in. Please try again.')
        console.error('Login error:', signInError)
        return
      }

      if (data.user) {
        router.push('/')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center px-4">
      <div className="flex items-center gap-12 max-w-6xl w-full">
        {/* Left side - Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 hidden lg:block"
        >
          <div className="relative w-full h-[600px]">
            <Image
              src="/images/temple.png"
              alt="Japanese Temple Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right side - Login form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className={`text-[48px] ${jollyLodgerFont.className} text-center mb-6`}>
              Welcome Back
            </h2>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm">
                {error}
                {info && (
                  <button
                    onClick={handleResendConfirmation}
                    className="ml-2 text-[#2C2C2C] hover:text-black font-medium underline"
                  >
                    Resend confirmation email
                  </button>
                )}
              </div>
            )}
            {!error && info && (
              <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">
                {info}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2C2C2C] text-white py-2 rounded-lg hover:bg-black transition-colors disabled:opacity-50 text-[20px]"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-[#2C2C2C] hover:text-black font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 