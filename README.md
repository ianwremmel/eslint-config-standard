# @ianwremmel/eslint-config-standard

[![CircleCI](https://circleci.com/gh/ianwremmel/eslint-config-standard.svg?style=svg)](https://circleci.com/gh/ianwremmel/eslint-config-standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/ianwremmel/eslint-config-standard.svg?token=35a4d251319f7e1813c079051755d7945a17d9eeff046f0dc763c21ef2ea9967&ts=1506394073152)](https://greenkeeper.io/)
[![node](https://img.shields.io/node/v/gh-badges.svg)](https://www.npmjs.com/package/@ianwremmel/eslint-config-standard)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> @ianwremmel's preferred modern lint rules

## Versioning

Since nearly every style change is a "breaking change", this repository increments minor version number for auto-fixable style changes and major version number for changes that must be addressed manually.

## Install

```bash
npm install --save-dev @ianwremmel/eslint-config-standard
(
  export PKG=@ianwremmel/eslint-config-standard;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

Add `@ianwremmel/eslint-config-base` to your eslint config's `extends` list.
## Maintainers

[Ian Remmel](https://github.com/ianwremmel)

## Contribute

See [CONTRIBUTE](CONTRIBUTE.md)

## License

&copy; [License Type](LICENSE)
