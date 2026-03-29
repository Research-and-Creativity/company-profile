import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'
import { inject } from '@vercel/analytics'
import { HelmetProvider } from 'react-helmet-async'
import { domAnimation, LazyMotion } from 'framer-motion'

inject()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <RouterProvider router={router} />
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>,
)
