module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
  },
  plugins: ['jsx-a11y'],
  env: {
    'shared-node-browser': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
