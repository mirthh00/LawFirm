/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue':      '#173B6C',
        'deep-blue-dark': '#0F2845',
        'light-orange':   '#F4A261',
        'soft-gray':      '#F7F8FA',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter:     ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}