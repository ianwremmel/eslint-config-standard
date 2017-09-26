'use strict';

module.exports = {
  rules: {
    'import/no-unresolved': [
      `error`,
      {commonjs: true}
    ],
    'import/named': `error`,
    'import/default': `error`,
    'import/namespace': `error`,
    'import/no-restricted-paths': `off`,
    'import/no-absolute-path': `error`,
    // dynamic-require should probably be prevented in browser code, but in node
    // land, it's actually quite powerful.
    'import/no-dynamic-require': `off`,
    // too many published packages encourage internal modules
    'import/no-internal-modules': `off`,
    'import/no-webpack-loader-syntax': `error`
  }
};
