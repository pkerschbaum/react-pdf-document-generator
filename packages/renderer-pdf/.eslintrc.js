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
  env: {
    ...baseEslintConfig.env,
    node: true,
  },
};
