export interface User {
  id: string
  email: string
  username: string
  fullName: string
  avatarUrl: string | null
  bio: string | null
  createdAt: string
  updatedAt: string
}

export interface Session {
  user: User | null
  accessToken: string | null
}

export interface AuthError {
  message: string
  status?: number
}

export type AuthState = {
  user: User | null
  session: Session | null
  loading: boolean
  error: AuthError | null
} 