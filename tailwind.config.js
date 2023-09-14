/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            require.resolve('react-widgets/styles.css'),          
  ],
  theme: {
      container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui", "react-widgets-tailwind")],
}

