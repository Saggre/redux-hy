module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jest',
  ],
  rules: {
    'max-len': ['error', 160, 2, {}],
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'no-alert': 'off',
  },
};
