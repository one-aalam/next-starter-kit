module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    // Why would you want unused vars?
    '@typescript-eslint/no-unused-vars': ['error'],
    // require return types on functions only where useful
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    //   },
    // ],
    // This rule disables the `Image` component's usage check. Enable if you'd prefer to turn it on for the entire app.
    '@next/next/no-img-element': 'off',
  },
}
