const baseEslintConfig = require('../../eslint-template');

module.exports = {
  ...baseEslintConfig,
  root: true,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [...(baseEslintConfig.plugins ?? []), 'jsx-a11y'],
  extends: [
    ...baseEslintConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    ...baseEslintConfig.rules,
    'react/prop-types': 'off',
  },
  env: {
    ...baseEslintConfig.env,
    'shared-node-browser': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
