'use strict';

module.exports = {
  rules: {
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // this rule is marked as stage-0 and in progress, so let's not rely on it
    // to break builds just yet
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'tooling/**/*.js',
          '**/*.spec.js',
          '**/*-spec.js',
          'test/**/spec/**/*.js'
        ],
        // Don't import optional dependencies; they need to be required so they
        // can be handled with a try/catch
        optionalDependencies: false
      }
    ],
    'import/no-mutable-exports': 'error'
  }
};
