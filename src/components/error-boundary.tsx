"use client"

import { Component, ErrorInfo, ReactNode } from 'react'
import * as Sentry from '@sentry/nextjs'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    })
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Something went wrong
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  We've been notified about this issue and are working to fix it.
                </p>
                <button
                  onClick={() => this.setState({ hasError: false })}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
} 