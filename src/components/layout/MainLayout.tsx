'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
  ssr: false
})

const Footer = dynamic(() => import('./Footer'), {
  ssr: false
})

const RightNavbar = dynamic(() => import('./RightNavbar'), {
  ssr: false
})

const ErrorBoundary = dynamic(() => import('../error-boundary/ErrorBoundary'), {
  ssr: false
})

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F5EFE6] flex">
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-8">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
        <RightNavbar />
      </div>
    </ErrorBoundary>
  )
}

export default MainLayout 