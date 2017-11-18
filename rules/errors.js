'use strict';

module.exports = {
  rules: {
    // Reminder: overrides don't merge, so we need to copy the whole object from
    // @ianwremmel/eslint-config-base
    'valid-jsdoc': [
      'error',
      {
        matchDescription: '.+',
        prefer: {
          arg: 'param',
          argument: 'param',
          fires: 'emits',
          return: 'returns',
          virtual: 'abstract'
        },
        preferType: {
          object: 'Object',
          function: 'Function',
          Boolean: 'boolean',
          Number: 'number',
          String: 'string'
        },
        // with requireReturn false, it'll still be required when a function
        // returns something
        requireReturn: false,
        requireReturnType: true,
        // requireParamDescription and requireReturnDescription should enabled
        // on a project by project basis
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ]

  }
};
