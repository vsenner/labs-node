module.exports = {
  extends: ['plugin:sonarjs/recommended', 'prettier', 'airbnb-standard'],
  plugins: ['sonarjs'],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
  },
};
