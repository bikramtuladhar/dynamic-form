// https://github.com/michael-ciniawsky/postcss-load-config

var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    // ...
    tailwindcss('./tailwind-config.js'),
    require('autoprefixer'),
    // ...
  ]
}