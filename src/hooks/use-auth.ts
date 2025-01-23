import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { AuthState, User } from '@/types/user'
import type { User as SupabaseUser, Session as SupabaseSession } from '@supabase/supabase-js'

function mapSupabaseUser(user: SupabaseUser): User {
  return {
    id: user.id,
    email: user.email ?? '',
    username: user.user_metadata?.username ?? '',
    fullName: user.user_metadata?.full_name ?? '',
    avatarUrl: user.user_metadata?.avatar_url ?? null,
    bio: user.user_metadata?.bio ?? null,
    createdAt: user.created_at,
    updatedAt: user.updated_at ?? user.created_at,
  }
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        setState(prev => ({ ...prev, error: { message: error.message }, loading: false }))
        return
      }
      
      if (session) {
        const mappedUser = mapSupabaseUser(session.user)
        setState(prev => ({
          ...prev,
          session: {
            user: mappedUser,
            accessToken: session.access_token,
          },
          user: mappedUser,
          loading: false,
        }))
      } else {
        setState(prev => ({ ...prev, loading: false }))
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const mappedUser = mapSupabaseUser(session.user)
        setState(prev => ({
          ...prev,
          session: {
            user: mappedUser,
            accessToken: session.access_token,
          },
          user: mappedUser,
        }))
      } else {
        setState(prev => ({ ...prev, session: null, user: null }))
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return state
} 