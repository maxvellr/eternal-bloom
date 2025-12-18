export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure this catches all your files
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        ebGaramond: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};