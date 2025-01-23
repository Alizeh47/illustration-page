import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    const { data, error } = await supabase.from('profiles').select('count').single()
    
    if (error) {
      return NextResponse.json(
        { error: 'Failed to connect to Supabase: ' + error.message },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ success: true, message: 'Successfully connected to Supabase!' })
  } catch (err) {
    return NextResponse.json(
      { error: 'Error testing Supabase connection: ' + err },
      { status: 500 }
    )
  }
} 