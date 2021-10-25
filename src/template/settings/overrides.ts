export const overrides = { files: [
  "*-test.ts",
  "*.spec.ts",
  "./dist/src/*.js"
],
rules: {
  "no-unused-expressions": "off",
  "max-len": ["error",
    { code: 120,
      comments: 120 }],
  "spaced-comment": ["off",
    "never"]
} };
