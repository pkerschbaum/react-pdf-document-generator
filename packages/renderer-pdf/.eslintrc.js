const baseEslintConfig = require('../eslint-template');

module.exports = {
  ...baseEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    tsconfigRootDir: __dirname,
  },
  env: {
    ...baseEslintConfig.env,
    node: true,
  },
};
