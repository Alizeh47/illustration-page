'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken, setAuthToken, removeAuthToken, loginUser, registerUser } from '@/services/auth'
import type { LoginFormData, SignupFormData } from '@/types/auth'

interface AuthContextType {
  isAuthenticated: boolean
  loading: boolean
  error: string
  login: (data: LoginFormData) => Promise<void>
  signup: (data: SignupFormData) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = getAuthToken()
    setIsAuthenticated(!!token)
  }, [])

  const login = async (data: LoginFormData) => {
    setLoading(true)
    setError('')
    try {
      const response = await loginUser(data)
      setAuthToken(response.token)
      setIsAuthenticated(true)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signup = async (data: SignupFormData) => {
    setLoading(true)
    setError('')
    try {
      const response = await registerUser(data)
      setAuthToken(response.token)
      setIsAuthenticated(true)
      router.push('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    removeAuthToken()
    setIsAuthenticated(false)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 