/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    "\\.(scss)$": "<rootDir>/node_modules/identity-obj-proxy",
    '\\.(svg)$': '<rootDir>/__mocks__/svg.js',
  }
};