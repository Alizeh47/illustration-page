"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics/google-analytics'

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname
      
      trackPageView(url)
    }
  }, [pathname, searchParams])
} 