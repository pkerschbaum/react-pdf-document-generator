const baseEslintConfig = require('../eslint-template.cjs');

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
