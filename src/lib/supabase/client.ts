import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

let supabase: ReturnType<typeof createClient<Database>>

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

if (!isBrowser) {
  // During build/SSR, use a mock client
  supabase = createClient<Database>(
    'http://localhost:54321',  // Dummy URL for build time
    'dummy-key',               // Dummy key for build time
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    }
  )
} else {
  // In browser, use real credentials
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
}

export { supabase }
export default supabase 