module.exports = {
  root: true,
  extends: [
    "eslint-config-prettify-ts-react"
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/no-danger': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off'
  }
};
