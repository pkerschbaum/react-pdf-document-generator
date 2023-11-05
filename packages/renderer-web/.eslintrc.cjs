// @ts-check
const baseEslintConfig = require('@document-generator/config-eslint/eslint-ecma.cjs');
const nextEslintConfig = require('@document-generator/config-eslint/eslint-next.cjs');

module.exports = {
  ...baseEslintConfig,
  ...nextEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    ...nextEslintConfig.parserOptions,
    tsconfigRootDir: __dirname,
  },
  plugins: [...(baseEslintConfig.plugins ?? []), ...(nextEslintConfig.plugins ?? []), 'jsx-a11y'],
  extends: [
    ...baseEslintConfig.extends,
    ...nextEslintConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: [
    ...(baseEslintConfig.ignorePatterns ?? []),
    ...(nextEslintConfig.ignorePatterns ?? []),
    'next.config.js',
  ],
  rules: {
    ...baseEslintConfig.rules,
    ...nextEslintConfig.rules,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    ...(baseEslintConfig.overrides ?? []),
    ...(nextEslintConfig.overrides ?? []),
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
