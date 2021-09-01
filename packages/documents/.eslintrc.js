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
  extends: [
    ...baseEslintConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  plugins: [...(baseEslintConfig.plugins ?? []), 'jsx-a11y'],
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
