module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.project.json',
    sourceType: 'module',
  },
  plugins: [
    /**
     * add "only-warn" plugin to change all errors to warnings.
     * ESLint is executed via Git hooks with --max-warnings 0 anyways. Transforming all errors to warnings
     * allows to distinguish ESLint warnings from other errors (e.g. TypeScript compile errors) in the
     * code editor (e.g. VS Code).
     */
    'only-warn',
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.cjs', 'eslint-template.cjs', 'lint-staged.config.cjs'],
  rules: {
    'no-extra-boolean-cast': 'off',
    'no-inner-declarations': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // empty objects can be useful for Conditional Types
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
      },
    ],
  },
};
