module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next", "react-hooks"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/indent": "off",
    "i18next/no-literal-string": ["warn", { markupOnly: true }],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect
  },

  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: { "i18next/no-literal-string": "off" },
    },
  ],
};
