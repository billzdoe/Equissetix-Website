import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── DISCIPLINED PALETTE ──────────────────────────────────────────
        // Identity: Deep Racing Green (anchor) + Gold (single CTA accent).
        // Everything else is a warm neutral. Aliases (`brand`, `navy`,
        // `coral`, `success`) map onto this so the ~300 legacy class
        // references across the codebase resolve to the new system.
        green: {
          50: '#f1f8f4',
          100: '#dcefe2',
          200: '#bbdfc8',
          300: '#8fc7a4',
          400: '#5BA577',
          500: '#2f8a57',  // interactive green
          600: '#1f6e43',
          700: '#0F5132',  // Deep Racing Green - Primary brand
          800: '#0c4029',
          900: '#0a3322',
          950: '#052015',
        },
        // Gold / Amber - the ONLY loud accent. Reserved for CTAs & highlights.
        gold: {
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fddf8a',
          300: '#fbcb4d',
          400: '#f7b22a',
          500: '#F59E0B',  // Primary CTA color
          600: '#d97e06',
          700: '#b45c09',
          800: '#92470e',
          900: '#783a0f',
          950: '#451d03',
        },
        // ── ALIASES → map legacy class names onto the disciplined palette ──
        // `brand-*` (used ~150×) → Deep Racing Green family.
        brand: {
          50: '#f1f8f4',
          100: '#dcefe2',
          200: '#bbdfc8',
          300: '#8fc7a4',
          400: '#5BA577',
          500: '#1f6e43',  // primary interactive brand green
          600: '#0F5132',
          700: '#0c4029',
          800: '#0a3322',
          900: '#082a1c',
          950: '#052015',
        },
        // `navy-*` (used for headings/text) → warm near-black charcoal.
        navy: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d4d9e0',
          300: '#aeb6c2',
          400: '#7c8898',
          500: '#586273',
          600: '#414a59',
          700: '#2f3744',
          800: '#1c222c',
          900: '#11161e',  // primary heading ink
          950: '#080b10',
        },
        // `success-*` → green (semantic).
        success: {
          50: '#f1f8f4',
          100: '#dcefe2',
          400: '#5BA577',
          500: '#2f8a57',
          600: '#1f6e43',
          700: '#0F5132',
        },
        // `coral-*` → gold (legacy spinner/accent references).
        coral: {
          50: '#fffaeb',
          100: '#fef0c7',
          400: '#f7b22a',
          500: '#F59E0B',
          600: '#d97e06',
        },
        // Teal - retuned toward muted sage-green so legacy uses sit in-palette.
        teal: {
          50: '#f0f7f4',
          100: '#d9ebe2',
          200: '#b3d6c6',
          300: '#84bba3',
          400: '#549b7e',
          500: '#2f8a57',  // reads as brand-green family, not turquoise
          600: '#1f6e43',
          700: '#185838',
          800: '#13452d',
          900: '#0f3625',
          950: '#062015',
        },
        // Burgundy - kept ONLY for problem/risk emphasis; muted clay-red.
        burgundy: {
          50: '#fbf3f2',
          100: '#f6e0dd',
          200: '#eec3bd',
          300: '#e09e95',
          400: '#cf7064',
          500: '#b14a3d',
          600: '#963a2f',  // problem-agitation accent
          700: '#7a2f27',
          800: '#5f261f',
          900: '#4a1f1a',
          950: '#280e0b',
        },
        // Blue - retuned to a deep slate-teal so "info" uses stay neutral.
        blue: {
          50: '#f1f5f7',
          100: '#dde7ec',
          200: '#bccfd9',
          300: '#90afbf',
          400: '#5d8499',
          500: '#3c6478',  // muted, not vibrant
          600: '#2f5061',
          700: '#284150',
          800: '#223543',
          900: '#1d2c38',
          950: '#0f1820',
        },
        // Neutral Colors
        charcoal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0F172A',  // Charcoal Black - text, depth
          950: '#020617',
        },
        cream: {
          50: '#F8FAFC',  // Light Cream - backgrounds
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        // Slate - Keep for backward compatibility
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        // Soft, layered shadows tuned to the warm-neutral background.
        'soft': '0 1px 2px rgba(10, 30, 20, 0.04), 0 1px 3px rgba(10, 30, 20, 0.06)',
        'medium': '0 2px 4px rgba(10, 30, 20, 0.05), 0 4px 10px rgba(10, 30, 20, 0.07)',
        'sharp': '0 0 0 1px rgba(10, 30, 20, 0.05), 0 2px 4px rgba(10, 30, 20, 0.08)',
        'modern': '0 2px 8px rgba(10, 30, 20, 0.06), 0 1px 3px rgba(10, 30, 20, 0.04)',
        'modern-lg': '0 12px 28px -8px rgba(10, 30, 20, 0.12), 0 4px 10px -4px rgba(10, 30, 20, 0.08)',
        'elevation': '0 24px 48px -16px rgba(10, 30, 20, 0.18), 0 8px 20px -8px rgba(10, 30, 20, 0.10)',
        'gold-glow': '0 8px 24px -6px rgba(245, 158, 11, 0.35)',
        'green-glow': '0 8px 24px -6px rgba(15, 81, 50, 0.30)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',
        'DEFAULT': '0.625rem',  // soft, premium default
        'md': '0.625rem',
        'lg': '0.875rem',
        'xl': '1.125rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      }
    },
  },
  plugins: [typography],
}
