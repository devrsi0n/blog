module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:import/typescript',
    '@devrsi0n/eslint-config-react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  globals: {
    __PATH_PREFIX__: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",

    'class-methods-use-this': 'off',

    'react/prefer-stateless-function': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/prop-types': 'off',

    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',

    'consistent-return': 'off',

    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-cond-assign': 'warn',
    'prefer-destructuring': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off'
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["warn"]
      }
    }
  ]
};
