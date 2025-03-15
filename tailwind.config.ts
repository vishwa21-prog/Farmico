
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "*.html",
    "./**/*.html",
    "./**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#94a3b8",
        background: "#ffffff",
        foreground: "#0f172a",
        primary: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc"
        },
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a"
        },
        accent: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff"
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        }
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
