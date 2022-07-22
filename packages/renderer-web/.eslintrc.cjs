const baseEslintConfig = require('../eslint-template.cjs');

module.exports = {
  ...baseEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    tsconfigRootDir: __dirname,
  },
  plugins: [...(baseEslintConfig.plugins ?? []), 'jsx-a11y'],
  extends: [
    ...baseEslintConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: [...(baseEslintConfig.ignorePatterns ?? []), 'next.config.js'],
  rules: {
    ...baseEslintConfig.rules,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
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
