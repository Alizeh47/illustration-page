import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined'
  
  // During build/SSR, return a mock response
  if (!isBrowser) {
    return NextResponse.json({ 
      success: true, 
      message: 'Build/SSR environment - Connection check skipped',
      timestamp: new Date().toISOString()
    })
  }

  try {
    const { data, error } = await supabase.rpc('now')
    
    if (error) {
      console.error('Supabase connection error:', error)
      return NextResponse.json(
        { error: 'Failed to connect to Supabase' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully connected to Supabase!',
      timestamp: data 
    })
  } catch (err) {
    console.error('Supabase connection error:', err)
    return NextResponse.json(
      { error: 'Error testing Supabase connection' },
      { status: 500 }
    )
  }
} 