module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/**/*.tsx",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
