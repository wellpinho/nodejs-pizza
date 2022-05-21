export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  collectCoverage: true,
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
