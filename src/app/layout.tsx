import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Roboto, Open_Sans } from 'next/font/google'
import { AuthProvider } from "@/components/auth/auth-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { GoogleAnalytics } from "@/lib/analytics/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ramen Munching",
  description: "Discover the art and culture of ramen through recipes, stories, and nutritional insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${openSans.variable} ${inter.className} antialiased`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <ErrorBoundary>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
