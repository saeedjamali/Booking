/** @type {import('tailwindcss').Config} */


export default {
  content: ["./public/**/*.{html,js}", './src/**/*.{js,ts,jsx,tsx}', "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js", 'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
} 