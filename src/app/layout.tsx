import './globals.css'
import { ErrorBoundary } from "@/components/error-boundary"
import { GoogleAnalytics } from "@/lib/analytics/google-analytics"
import { GlobalProvider } from '@/context/GlobalContext'
import { AuthProvider } from '@/components/auth/auth-provider'
import { displayFont, jollyLodgerFont } from '@/styles/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${jollyLodgerFont.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={displayFont.className}>
        <ErrorBoundary>
          <AuthProvider>
            <GlobalProvider>
              {children}
            </GlobalProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
