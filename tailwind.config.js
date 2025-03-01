import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'light', 
      'dark',
      'cyberpunk',
      'synthwave',
      'nord',
      'winter',
      'retro',
      'night',
      'forest',
      'luxury',
      'dracula',
      'emerald',
      'corporate',
      'dim',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'black',
      'white',
    ]
  }
}