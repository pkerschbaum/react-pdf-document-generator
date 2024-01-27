// @ts-check
const baseEslintConfig = require('@document-generator/config-eslint/eslint-ecma.cjs');
const reactEslintConfig = require('@document-generator/config-eslint/eslint-react.cjs');
const nextEslintConfig = require('@document-generator/config-eslint/eslint-next.cjs');

module.exports = {
  ...baseEslintConfig,
  ...reactEslintConfig,
  ...nextEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    ...reactEslintConfig.parserOptions,
    ...nextEslintConfig.parserOptions,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    ...(baseEslintConfig.plugins ?? []),
    ...(reactEslintConfig.plugins ?? []),
    ...(nextEslintConfig.plugins ?? []),
    'jsx-a11y',
  ],
  extends: [
    ...baseEslintConfig.extends,
    ...reactEslintConfig.extends,
    ...nextEslintConfig.extends,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: [
    ...(baseEslintConfig.ignorePatterns ?? []),
    ...(reactEslintConfig.ignorePatterns ?? []),
    ...(nextEslintConfig.ignorePatterns ?? []),
    'next.config.js',
  ],
  rules: {
    ...baseEslintConfig.rules,
    ...reactEslintConfig.rules,
    ...nextEslintConfig.rules,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    ...(baseEslintConfig.overrides ?? []),
    ...(reactEslintConfig.overrides ?? []),
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
