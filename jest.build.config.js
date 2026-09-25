const nextJest = require('next/jest');

// The post-build suite: starts `next start` against `.next` and checks what
// the server actually sends (status codes, headers, redirects, titles).
// Separate from `jest.config.js` so `pnpm test` stays runnable without a
// build, and so a missing build fails this suite rather than skipping it.
const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  testEnvironment: 'node',
  testMatch: ['**/tests/built-site/**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // `src/lib/blog.ts` imports `marked`, which publishes only an ES module
    // entry; jest loads CommonJS. Its UMD build is the same code.
    '^marked$': '<rootDir>/node_modules/marked/lib/marked.umd.js',
  },
});
