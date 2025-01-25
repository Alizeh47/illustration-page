export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

export interface AuthError {
  message: string
  code?: string
} 