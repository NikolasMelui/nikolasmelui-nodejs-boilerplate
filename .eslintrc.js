module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'no-console': ['allow', 'always'],
    'linebreak-style': ['error', 'unix']
  }
};
