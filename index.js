'use strict';

module.exports = {
  env: {es6: true},
  extends: [
    '@ianwremmel/eslint-config-base',
    './rules/errors',
    './rules/style',
    './rules/es6',
    './rules/import/static-analysis',
    './rules/import/helpful-warnings',
    './rules/import/module-systems',
    './rules/import/style-guide'
  ].map(require.resolve),
  parserOptions: {
    // note: move to 8 once async/await is natively support by an LTS node
    ecmaVersion: 7,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ]
};
