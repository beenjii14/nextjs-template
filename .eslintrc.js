// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    jsx: true,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-redeclare': 0,
    'comma-dangle': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/default-param-last': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true },
    ],
  },
};
