import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
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