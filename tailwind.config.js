/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // './app/**/*.{js,ts,jsx,tsx}
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
        keyword: '#4D5BCE',
        var: '#229977',
        string: '#E99287',
        blueToken: '#5565E8',
        token1: '#C98BDF',
        token2: '#5565E8',
        token3: '#FEA55F',
        token4: '#607B96',
      },
      backgroundImage: {
        gameBox:
          'linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)',
      },
      boxShadow: {
        gameBox: 'inset 0px 2px 0px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
