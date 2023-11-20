/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: { __IS_DEV__: true, __API__: "" },
  preset: "ts-jest",
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/configs/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": ["<rootDir>/configs/jest/jestEmptyComponent.tsx"],
  },
};
