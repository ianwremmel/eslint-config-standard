'use strict';

module.exports = {
  rules: {
    'import/first': `error`,
    // eslint can't seem to resolve exports-last
    // 'import/exports-last': `error`,
    'import/no-duplicates': `error`,
    'import/no-namespace': `error`,
    'import/extensions': `error`,
    'import/order': [
      `error`,
      {'newlines-between': `always`}
    ],
    'import/newline-after-import': `error`,
    'import/prefer-default-export': `error`,
    'import/max-dependencies': `error`,
    'import/no-unassigned-import': `error`,
    'import/no-named-default': `error`,
    'import/no-anonymous-default-export': `error`
  }
};
