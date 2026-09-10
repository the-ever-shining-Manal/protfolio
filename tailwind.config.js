/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030208',
          900: '#060412',
          850: '#0a071d',
          800: '#0f0b29',
          700: '#18123d',
          600: '#261b58',
          border: 'rgba(147, 51, 234, 0.18)',
        },
        cosmic: {
          violet: '#7e22ce',
          purple: '#9333ea',
          magenta: '#c026d3',
          pink: '#ec4899',
          rose: '#f43f5e',
          orange: '#f97316',
          amber: '#fbbf24',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cosmic-sm': '0 0 15px -3px rgba(168, 85, 247, 0.25)',
        'cosmic-md': '0 0 30px -5px rgba(217, 70, 239, 0.3)',
        'cosmic-lg': '0 0 50px -10px rgba(236, 72, 153, 0.35)',
        'cosmic-orange': '0 0 30px -5px rgba(249, 115, 22, 0.3)',
        'cosmic-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'inner-glow': 'inset 0 0 20px 0 rgba(168, 85, 247, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'orbit-clockwise': 'orbitClockwise 25s linear infinite',
        'orbit-counter': 'orbitCounter 35s linear infinite',
        'spin-very-slow': 'spin 50s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbitClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitCounter: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
