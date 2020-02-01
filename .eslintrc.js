module.exports = {
  root: true,
  extends: [
    "eslint-config-prettify-ts-react"
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/no-danger': 'off',
    'no-unused-vars': 'off',
    'import/no-named-as-default-member': 'off'
  }
};
