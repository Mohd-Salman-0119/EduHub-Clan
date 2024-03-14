const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-primary": "#ACE8E3"

      },
      screens: {
        '2sm': '350px',
        'sm': '640px',     // Small screens
        'md': '768px',     // Medium screens
        'lg': '1024px',    // Large screens
        'xl': '1280px',    // Extra-large screens
      },
    },
  },
  plugins: [],
});