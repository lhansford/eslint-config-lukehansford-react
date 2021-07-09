/* eslint-env node */
module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  extends: [
    'eslint-config-lukehansford-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {},
};
