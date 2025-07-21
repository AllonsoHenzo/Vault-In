/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
],
plugins: [
  require('flowbite/plugin')
],

}

