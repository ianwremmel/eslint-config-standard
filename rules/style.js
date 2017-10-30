'use strict';

module.exports = {
  rules: {
    quotes: [
      'error',
      'single',
      {avoidEscape: true}
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true
        }
      }
    ]
  }
};
