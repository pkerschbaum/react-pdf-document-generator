// @ts-check
const baseEslintConfig = require('../eslint-template.cjs');
const { removeTypeInfoRules } = require('../eslint-typeinfo-rules-filter.cjs');

module.exports = removeTypeInfoRules({
  ...baseEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    tsconfigRootDir: __dirname,
  },
});
