import { supabase } from './client'

export async function testSupabaseConnection() {
  // Check if we have the required environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return {
      success: false,
      message: 'Missing Supabase configuration',
      error: 'Environment variables are not properly configured'
    }
  }

  try {
    // First try a lightweight health check
    const { data: healthCheck, error: healthError } = await supabase.from('profiles').select('count').limit(1)
    
    if (healthError) {
      console.error('Supabase connection error:', healthError.message)
      return {
        success: false,
        message: 'Failed to connect to Supabase',
        error: healthError.message
      }
    }

    // Connection successful
    return {
      success: true,
      message: 'Successfully connected to Supabase!',
      timestamp: new Date().toISOString(),
      data: healthCheck
    }
  } catch (err) {
    console.error('Error testing Supabase connection:', err)
    return {
      success: false,
      message: 'Error testing Supabase connection',
      error: err instanceof Error ? err.message : 'Unknown error'
    }
  }
} 