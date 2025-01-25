import { LoginFormData, SignupFormData, AuthResponse } from '@/types/auth'

// Mock authentication for development
const mockAuth = true // Set to false when real backend is ready

async function mockResponse(data: any): Promise<any> {
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
  return data
}

async function handleResponse(response: Response) {
  const text = await response.text()
  let data
  try {
    data = JSON.parse(text)
  } catch {
    throw new Error('Invalid server response')
  }
  
  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }
  
  return data
}

export async function loginUser(data: LoginFormData): Promise<AuthResponse> {
  if (mockAuth) {
    return mockResponse({
      token: 'mock_token_' + Date.now(),
      user: {
        id: '1',
        name: 'Test User',
        email: data.email
      }
    })
  }

  const response = await fetch(`/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function registerUser(data: SignupFormData): Promise<AuthResponse> {
  if (mockAuth) {
    return mockResponse({
      token: 'mock_token_' + Date.now(),
      user: {
        id: '1',
        name: data.name,
        email: data.email
      }
    })
  }

  const response = await fetch(`/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function logoutUser(): Promise<void> {
  if (mockAuth) {
    return mockResponse(undefined)
  }

  const response = await fetch(`/api/auth/logout`, {
    method: 'POST',
  })
  if (!response.ok) {
    const data = await handleResponse(response)
    throw new Error(data.message || 'Failed to logout')
  }
}

// Helper function to get the stored auth token
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('auth_token')
}

// Helper function to set the auth token
export function setAuthToken(token: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('auth_token', token)
}

// Helper function to remove the auth token
export function removeAuthToken(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('auth_token')
} 