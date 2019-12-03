module.exports = {
  root: true,
  extends: [
    "eslint-config-prettify-ts-react"
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react/no-danger': 'off',
    'no-unused-vars': 'off'
  }
};
