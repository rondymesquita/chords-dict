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
  plugins: ['react-refresh', 'simple-import-sort', 'unused-imports'],
  rules: {
    quotes: ['error', 'single'],
    // 'max-len': ['error', { code: 80 }],
    'space-infix-ops': ['error'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    indent: ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/indent': ['error', 2],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'new-cap': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { multiline: true, minProperties: 4 }],
    // 'object-property-newline': ['error'],
    'array-bracket-newline': ['error',{ multiline: true, minItems: 4 }],
    'new-parens': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // 'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'always'],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-newline': ['error', { prevent: true , allowMultilines: true }],
    // 'react/jsx-curly-newline': ['error', 'line-aligned'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-wrap-multilines': ['error'],
    'react-hooks/rules-of-hooks': ['off'],
    'unused-imports/no-unused-imports': ['error'],
  },
};
