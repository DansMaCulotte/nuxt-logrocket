const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = Object.assign(
    {
      id: process.env.LOGROCKET_ID || '',
      devModeAllowed: process.env.LOGROCKET_DEV_MODE_ALLOWED || false,
      disabled: process.env.LOGROCKET_DISABLED || false
    },
    this.options.logRocket,
    moduleOptions
  )

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-logrocket.js',
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
