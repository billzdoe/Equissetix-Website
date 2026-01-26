import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import App from './App.tsx'
import './index.css'

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)
