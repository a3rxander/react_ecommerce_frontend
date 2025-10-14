import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EcommerceApp } from './EcommerceApp'
import { AuthProvider } from './features/auth/context/AuthProvider'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <EcommerceApp />
    </AuthProvider>
  </StrictMode>,
)
