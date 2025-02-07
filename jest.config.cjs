/** @type {import('jest').Config} */
module.exports = {
  roots: ["<rootDir>/src"], // Only look for tests inside src/
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Match .test.ts/.spec.ts
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }], // Use ts-jest with ESM support
  },
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: "jsdom", // Change to "node" if testing backend code
};
