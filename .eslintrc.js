module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		semi: ['error', 'always'],
	},
};
