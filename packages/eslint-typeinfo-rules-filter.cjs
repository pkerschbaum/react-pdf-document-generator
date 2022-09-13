// @ts-check
const { RULES_PATH } = require('./eslint-typeinfo-rules-constants.cjs');
const rulesRequiringTypeInfo = require(RULES_PATH);
const applyHeavyRules = process.env.APPLY_HEAVY_RULES === 'true';

function removeTypeInfoRules(eslintConfig) {
  if (applyHeavyRules) {
    return eslintConfig;
  }

  const newExtends = eslintConfig.extends.filter(
    (extend) => extend !== 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  );
  const newRules = {};

  for (const [ruleName, ruleConfig] of Object.entries(eslintConfig.rules)) {
    if (!rulesRequiringTypeInfo.includes(ruleName)) {
      newRules[ruleName] = ruleConfig;
    }
  }

  return {
    ...eslintConfig,
    extends: newExtends,
    rules: newRules,
  };
}

module.exports = { removeTypeInfoRules };
