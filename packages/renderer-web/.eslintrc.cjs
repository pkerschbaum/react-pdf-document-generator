// @ts-check
const baseEslintConfig = require('../eslint-template.cjs');
const { removeTypeInfoRules } = require('@pkerschbaum/typescript-eslint-rules-requiring-type-info');

const applyHeavyRules = process.env.APPLY_HEAVY_RULES === 'true';
console.log('process.env.APPLY_HEAVY_RULES set to ' + process.env.APPLY_HEAVY_RULES);

/**
 * @type {any}
 */
const eslintConfig = {
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
  overrides: [
    ...(baseEslintConfig.overrides ?? []),
    {
      // allow default export for Next.js pages
      files: ['src/pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = applyHeavyRules ? eslintConfig : removeTypeInfoRules(eslintConfig);
