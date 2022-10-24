/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: '#E5E5E5',
        secondaryBG: '#011627',
        primaryText: '#607B96',
        light: '#1E2D3D',
      },
    },
  },
  plugins: [],
};
