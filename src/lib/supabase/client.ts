import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// During build time, use dummy values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy-anon-key'

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: process.env.NODE_ENV === 'production'
    }
  }
)

export default supabase 