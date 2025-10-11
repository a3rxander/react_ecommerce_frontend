import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { EcommerceApp} from './EcommerceApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcommerceApp />
  </StrictMode>,
)
