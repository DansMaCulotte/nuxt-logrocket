const { resolve } = require('path')
require('dotenv').config({
  path: resolve(__dirname, '.env')
})

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  buildDir: resolve(__dirname, '.nuxt'),
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@']
}
