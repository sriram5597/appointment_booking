module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    semi: ['error', 'always'],
    'react/jsx-uses-vars': 'error',
    'import/default-export': 0,
    'react/jsx-indent': ['error', 4, { checkAttributes: true, indentLogicalExpressions: true }],
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
  },
};
