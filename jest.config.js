const nextJest = require('next/jest');

// The devDependencies for this have been installed for a long time with nothing
// wired to them: no config, no `test` script, no test files. That is why a
// deleted API route could take its `zod` dependency's last importer with it and
// leave the package behind, and why a redirect could only be evidenced by a
// curl run pasted into a pull request.
const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/**/*.test.ts', '**/src/**/*.test.tsx', '**/tests/**/*.test.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
});
