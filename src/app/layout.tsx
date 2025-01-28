import './globals.css'
import { ErrorBoundary } from "@/components/error-boundary"
import { GoogleAnalytics } from "@/lib/analytics/google-analytics"
import { GlobalProvider } from '@/context/GlobalContext'
import { AuthProvider } from '@/components/auth/auth-provider'
import { inter, jollyLodgerFont } from '@/styles/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${jollyLodgerFont.className}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <ErrorBoundary>
          <GlobalProvider>
            <AuthProvider>{children}</AuthProvider>
          </GlobalProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
