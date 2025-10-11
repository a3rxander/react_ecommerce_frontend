import { RouterProvider } from 'react-router'

import { AuthProvider } from '@/app/contexts/AuthContext'
import { router } from '@/app/routes'

export const EcommerceApp = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
