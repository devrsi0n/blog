'use strict';

// https://github.com/marionebl/commitlint
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [1, 'always', ['lower-case', 'upper-case', 'pascal-case']]
  }
};
