# @stackline/karma-chrome-launcher

> A Karma plugin. Launcher for Chrome and Chrome Canary.

[![npm version](https://img.shields.io/npm/v/@stackline/karma-chrome-launcher.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/karma-chrome-launcher)
[![license](https://img.shields.io/npm/l/@stackline/karma-chrome-launcher.svg?style=flat-square)](https://github.com/alexandroit/stackline-karma-chrome-launcher)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-karma-chrome-launcher-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-karma-chrome-launcher)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/karma-chrome-launcher/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/karma-chrome-launcher/)** | **[npm](https://www.npmjs.com/package/@stackline/karma-chrome-launcher)** | **[Issues](https://github.com/alexandroit/stackline-karma-chrome-launcher/issues)** | **[Repository](https://github.com/alexandroit/stackline-karma-chrome-launcher)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/karma-chrome-launcher` is the Stackline-maintained distribution of `karma-chrome-launcher@3.2.0`. It is an independent continuation of [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/karma-chrome-launcher@1.0.1` |
| API target | `karma-chrome-launcher@3.2.0` |
| Supported Node.js | `See supported framework requirements` |
| License | `MIT` |
| Main entry | `index.js` |
| Runtime dependencies | `which` |

## Installation

```bash
npm install @stackline/karma-chrome-launcher
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install karma-chrome-launcher@npm:@stackline/karma-chrome-launcher
```

## Usage and API reference

### karma-chrome-launcher



> Launcher for Google Chrome, Google Chrome Canary and Google Chromium.

## Installation

The easiest way is to keep `karma-chrome-launcher` as a devDependency in your `package.json`,
by running

```bash
$ npm i -D @stackline/karma-chrome-launcher
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'Chrome_without_security'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser

    // you can define custom flags
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--disable-site-isolation-trials']
      }
    }
  })
}
```

The `--user-data-dir` is set to a temporary directory but can be overridden on a custom launcher as shown below.
One reason to do this is to have a permanent Chrome user data directory inside the project directory to be able to
install plugins there (e.g. JetBrains IDE Support plugin).

```js
customLaunchers: {
  Chrome_with_debugging: {
    base: 'Chrome',
    chromeDataDir: path.resolve(__dirname, '.chrome')
  }
}
```

You can pass list of browsers as a CLI argument too:

```bash
$ karma start --browsers Chrome,Chrome_without_security
```

## Headless Chromium with Puppeteer

The Chrome DevTools team created [Puppeteer](https://github.com/GoogleChrome/puppeteer) - it will automatically install Chromium for all
platforms and contains everything you need to run it from within your CI.

### Available Browsers
*Note: Headless mode requires a browser version >= 59*

- Chrome (CHROME_BIN)
- ChromeHeadless (CHROME_BIN)
- Chromium (CHROMIUM_BIN)
- ChromiumHeadless (CHROMIUM_BIN)
- ChromeCanary (CHROME_CANARY_BIN)
- ChromeCanaryHeadless (CHROME_CANARY_BIN)
- Dartium (DARTIUM_BIN)

#### Usage
```bash
$ npm i -D puppeteer karma-chrome-launcher
```

```js
// karma.conf.js
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless']
  })
}
```

----

For more information on Karma see the [homepage].

[homepage]: https://karma-runner.github.io

## Credits and original authors

- Original project: [karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher).
- Vojta Jina.
- Mark Ethan Trostler.
- Rogério Vicente.
- dignifiedquire.
- Jonathan Ginsburg.
- rogeriopvl.
- Friedel Ziegelmayer.
- greenkeeperio-bot.
- johnjbarton.
- Mark Trostler.
- Michał Gołębiowski-Owczarek.
- dependabot[bot].
- Andrey Taranov.
- Aymeric Beaumet.
- Filipe Guerra.
- Alexander Fedyashov.
- Darryl Pogue.
- David.
- Florian Richter.
- Florian-R.
- François SIMOND.
- Hai Feng Kao.
- J Rob Gant.
- J. Abbott.
- Jeff Cross.
- Joe Doyle.
- Julien Sanchez.
- Marko Vuksanovic.
- Nicholas Mitchell.
- Parashuram N.
- Stefan Bley.
- Tatsuyuki Ishi.
- Timo Tijhof.
- Vincent Voyer.
- aSemy.
- brutalcrozt.
- cexbrayat.
- daniel rodriguez.
- gkostov.
- semantic-release-bot.
- Copyright (C) 2011-2013 Google, Inc.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-karma-chrome-launcher).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
