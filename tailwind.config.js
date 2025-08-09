/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      fontFamily: {
        'mincho': ['Noto Serif JP', 'Yu Mincho', 'serif'],
      }
    },
    "plugins": []
  }
}