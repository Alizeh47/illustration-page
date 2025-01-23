import { ProtectedRoute } from '@/components/auth/protected-route'
import { useAuth } from '@/components/auth/auth-provider'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Dashboard</h2>
                  <p>This is a protected page. You can only see this if you're authenticated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
} 