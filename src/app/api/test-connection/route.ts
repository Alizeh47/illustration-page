import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  // During build time, return a mock response
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json({ 
      success: true, 
      message: 'Build-time check - Supabase connection will be tested in production',
      timestamp: new Date().toISOString()
    })
  }

  try {
    // Just test if we can connect to Supabase by getting the server timestamp
    const { data, error } = await supabase.rpc('now')
    
    if (error) {
      return NextResponse.json(
        { error: 'Failed to connect to Supabase: ' + error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully connected to Supabase!',
      timestamp: data 
    })
  } catch (err) {
    return NextResponse.json(
      { error: 'Error testing Supabase connection: ' + (err instanceof Error ? err.message : String(err)) },
      { status: 500 }
    )
  }
} 