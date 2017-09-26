'use strict';

module.exports = {
  rules: {
    quotes: [
      `error`,
      `backtick`
    ],
    'require-jsdoc': [
      `error`,
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
