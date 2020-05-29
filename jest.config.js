module.exports = {
	reporters: ['default', 'jest-junit'],
	collectCoverage: true,
	collectCoverageFrom: [
		'**/**/*.js',
		'!**/node_modules/**',
		'!**/**/*.stories.js',
	],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	coverageDirectory: './coverage',
    coverageReporters: ['cobertura', 'text-summary', 'text'],
};