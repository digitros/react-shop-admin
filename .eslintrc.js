module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': 2,
    'prettier/prettier': 2,
  },
};
