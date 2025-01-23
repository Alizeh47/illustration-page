import { supabase } from './client'

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('profiles').select('count').single()
    
    if (error) {
      console.error('Supabase connection error:', error.message)
      return false
    }
    
    console.log('Successfully connected to Supabase!')
    return true
  } catch (err) {
    console.error('Error testing Supabase connection:', err)
    return false
  }
} 