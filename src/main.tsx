import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const recaptchaSiteKey = (import.meta as any).env.VITE_RECAPTCHA_SITE_KEY || ''

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
        <App />
      </GoogleReCaptchaProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
