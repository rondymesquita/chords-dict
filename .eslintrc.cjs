module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      },
    ],
    indent: ['error', 2],
    'new-cap': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', 'always'],
    'object-property-newline': ['error'],
    'array-bracket-newline': [
      'error',{
        multiline: true
      }
    ],
    'new-parens': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'react/react-in-jsx-scope': ['off']
  },
};
