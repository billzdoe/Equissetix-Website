/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY: string
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly VITE_GA4_MEASUREMENT_ID: string
  readonly VITE_FB_PIXEL_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
