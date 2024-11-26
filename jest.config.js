const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/cypress/"],
};

module.exports = createJestConfig(customJestConfig);