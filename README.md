# nuxt-logrocket

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Nuxt.js module for LogRocket

[📖 **Release Notes**](./CHANGELOG.md)

## Features

- Supports `logrocket-vuex` plugin integration by default
- Ability to run in development mode

## Setup

1. Add the `@dansmaculotte/nuxt-logrocket` dependency with `yarn` or `npm` to your project
2. Add `@dansmaculotte/nuxt-logrocket` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    '@dansmaculotte/nuxt-logrocket',

    // With options
    [
      '@dansmaculotte/nuxt-logrocket',
      { /* module options */ }
    ]
  ],

  // Or with global options
  logRocket: {
    id: '',
    devModeAllowed: false,
    disabled: false
  }
}
```

## Options

Options can be passed using either environment variables or `logRocket` section in `nuxt.config.js`.
Setting a value for the required `id` option is enough in most cases.

### id

- Type: `String`
  - Default: `process.env.LOGROCKET_ID || ''`

### devModeAllowed

Force LogRocket to load in development.

- Type: `Boolean`
  - Default: `process.env.LOGROCKET_DEV_MODE_ALLOWED || false`

### disabled

Prevent LogRocket from loading automatically, useful for GDPR compliance.

- Type: `Boolean`
  - Default: `process.env.LOGROCKET_DISABLED || false`

You can manually load LogRocket by using `load` method in your application:

```js
this.$logRocket.load()
```

## Usage

LogRocket gets automatically injected into your application when it is setup correctly. By default this module works only in `production` and on client-side events.

In order to use LogRocket's injected functionality in your application, you can use :

```js
this.$logRocket
```

in your components or :

```js
app.$logRocket
```

in plugins.

If Vuex store is initialized, LogRocket Vuex plugin will be automatically registered.

Visit LogRocket's website for a full list of features : [Docs](https://docs.logrocket.com/docs)

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/nuxt-logrocket.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/nuxt-logrocket

[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/nuxt-logrocket/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/nuxt-logrocket

[david-dm-src]: https://david-dm.org/dansmaculotte/nuxt-logrocket/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/nuxt-logrocket

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
