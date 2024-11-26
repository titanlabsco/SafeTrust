// import nextJest from "next/jest.js";

// const createJestConfig = nextJest({
//   dir: "./",
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//   moduleNameMapper: {
//     "^@/components/(.*)$": "<rootDir>/src/components/$1",
//     "^@/lib/(.*)$": "<rootDir>/lib/$1",
//   },
//   testEnvironment: "jest-environment-jsdom",
//   testMatch: [
//     "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/app/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
//     "<rootDir>/app/**/*.{spec,test}.{js,jsx,ts,tsx}",
//     "<rootDir>/lib/**/*.{spec,test}.{js,jsx,ts,tsx}",
//   ],
//   testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
//   collectCoverageFrom: [
//     "app/**/*.{js,jsx,ts,tsx}",
//     "src/**/*.{js,jsx,ts,tsx}",
//     "lib/**/*.{js,jsx,ts,tsx}",
//     "!app/**/*.d.ts",
//     "!src/**/*.d.ts",
//     "!lib/**/*.d.ts",
//   ],
//   overageReporters: ["text", "lcov", "html"],
//   coverageThreshold: {
//     global: {
//       branches: 80,
//       functions: 80,
//       lines: 80,
//       statements: 80,
//     },
//   },
// };

// export default createJestConfig(customJestConfig);

// file: jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // <= setup file here 
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

