'use strict';

module.exports = {
  rules: {
    'valid-jsdoc': [
      'error',
      {
        matchDescription: '.+',
        requireReturn: true,
        requireReturnType: true,
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ]
  }
};
