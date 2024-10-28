import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
	{
		ignores: ['node_modules', 'build', 'dist', 'public', '.gitignore'],
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		languageOptions: {
			globals: {},
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^\\u0000'],
						['^react$', '^react', '^@?\\w'],
						['^(@root|types|data)(/.*)'],
						['^@/\\w', '^(app|components|utils|context|config|pages|hooks|styles|public)(/.*)'],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					],
				},
			],
			'sort-imports': 'off',
			'import/order': 'off',
		},
	},
]
