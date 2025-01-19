/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: '#52C982',
        blue: '#3878E5',
        iconBG: '#394050',
        divColor : '#202938',
        darkBG: '#111828',
        fontColor: '#FAFCFD',
        red: '#DC6B71',
      },

      screens: {
        'xs': '480px',     // Extra small screen
        'sm': '640px',     // Small screen
        'md': '768px',     // Medium screen
        'lg': '1024px',    // Large screen
        'xl': '1280px',    // Extra large screen
        '2xl': '1536px',   // 2x extra large screen
      },

    },
  },
  plugins: [],
}