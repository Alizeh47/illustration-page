'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/components/auth/auth-provider'
import { jollyLodgerFont } from '@/styles/fonts'
import { supabase } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const { loading } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address')
      return
    }
    
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          }
        }
      })

      if (signUpError) {
        // Map backend errors to user-friendly messages
        if (signUpError.message.includes('Email address') && signUpError.message.includes('invalid')) {
          setError('Please enter a valid email address')
        } else if (signUpError.message.includes('already registered')) {
          setError('This email is already registered')
        } else {
          setError('Unable to create account. Please try again.')
        }
        console.error('Signup error:', signUpError) // Log for debugging
        return
      }

      if (data.user) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/auth/login')
        }, 2000)
      }
    } catch (error) {
      console.error('Signup error:', error) // Log for debugging
      setError('Unable to create account. Please try again.')
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

        {/* Right side - Sign up form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className={`text-[48px] ${jollyLodgerFont.className} text-center mb-6`}>
              Create Account
            </h2>
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">
                Account created successfully! Redirecting to login...
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
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
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters long</p>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-[#2C2C2C] text-white py-2 rounded-lg hover:bg-black transition-colors disabled:opacity-50 text-[20px]"
              >
                {loading ? 'Creating account...' : success ? 'Account Created!' : 'Create Account'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[#2C2C2C] hover:text-black font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 