# @anvilabs/tslint-config

[![Version](https://img.shields.io/npm/v/@anvilabs/tslint-config.svg)](http://npm.im/@anvilabs/tslint-config)
[![Build Status](https://img.shields.io/travis/anvilabs/tslint-config.svg)](https://travis-ci.org/anvilabs/tslint-config)
[![Dependency Status](https://david-dm.org/anvilabs/tslint-config/status.svg)](https://david-dm.org/anvilabs/tslint-config)
[![devDependency Status](https://david-dm.org/anvilabs/tslint-config/dev-status.svg)](https://david-dm.org/anvilabs/tslint-config?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Anvilabs' TSLint config, designed to be used in conjunction with ESLint and [our shareable ESLint configs](https://github.com/anvilabs/eslint-config). Includes mostly TS-specific rules taking advantage of TSLint's [ability to work with the type checker](https://palantir.github.io/tslint/usage/type-checking/).

## Usage

Install the package as a development dependency:

```bash
$ yarn add typescript tslint @anvilabs/tslint-config --dev
# or
$ npm install typescript tslint @anvilabs/tslint-config --save-dev
```

Then create a `tslint.json` file in the root of your project:

```json
{
  "extends": "@anvilabs/tslint-config"
}
```

New rules may be added or existing ones modified like so:

```json
{
  "extends": "@anvilabs/tslint-config",
  "rules": {
    // your overrides
  }
}
```

## Tips

It is recommended to use the TypeScript [language service plugin for TSLint](https://github.com/angelozerr/tslint-language-service) to ensure easier integration with different code editors.

## License

[MIT License](./LICENSE) © Anvilabs LLC
