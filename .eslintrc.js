module.exports = {
	env: { es6: true },
	// extends: ['airbnb-base', 'prettier'],
	plugins: ['simple-import-sort'],
	// parserOptions: { ecmaVersion: 'latest' },
	rules: {
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					//
					['^\\u0000'],
					//
					['^react$', '^react', '^@?\\w'],
					//
					['^(@root|types|data)(/.*)'],
					[
						//
						'^@/\\w',
						'^(app|components|utils|context|config|pages|hooks|styles|public)(/.*)',
					],
					[
						//
						'^\\.\\.(?!/?$)',
						'^\\.\\./?$',
					],
					[
						//
						'^\\./(?=.*/)(?!/?$)',
						'^\\.(?!/?$)',
						'^\\./?$',
					],
				],
			},
		],
		'sort-imports': 'off',
		'import/order': 'off',
	},
}
