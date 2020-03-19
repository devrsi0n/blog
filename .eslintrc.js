module.exports = {
  root: true,
  extends: [
    "eslint-config-prettify-ts-react"
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-danger': 'off',
    'no-unused-vars': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
};
