module.exports = {
  extends: [
    'plugin:sonarjs/recommended',
    'prettier',
    'airbnb-standard'
  ],
  plugins: [
    'sonarjs',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
  },
};
