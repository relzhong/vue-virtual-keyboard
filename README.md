# VueVirtualKeyboard

[![npm](https://img.shields.io/npm/v/vue-virtual-keyboard.svg)](https://www.npmjs.com/package/vue-virtual-keyboard) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Use jQuery Virtual Keyboard in Vue

A on-screen keyboard (OSK) Component that works in the browser for vue. Useful for Kiosk Touchscreens.

Inspired by [react-virtual-keyboard](https://github.com/Utzel-Butzel/react-virtual-keyboard)
Based on the Virtual Keyboard using jQuery:
https://mottie.github.io/Keyboard/
For more information, check out the API documentation: https://github.com/Mottie/Keyboard/wiki/Options

## Installation

```bash
npm install --save vue-virtual-keyboard
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueVirtualKeyboard from 'vue-virtual-keyboard'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-virtual-keyboard/dist/vue-virtual-keyboard.css'

Vue.use(VueVirtualKeyboard)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vue-virtual-keyboard/dist/vue-virtual-keyboard.css"></link>
<script src="vue-virtual-keyboard/dist/vue-virtual-keyboard.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vue-virtual-keyboard/dist/vue-virtual-keyboard.css"></link>
<script src="https://unpkg.com/vue-virtual-keyboard"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
