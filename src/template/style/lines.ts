export const lines = {
  "newline-before-return": "error",
  "no-unexpected-multiline": "error",
  "object-curly-newline": "always",
  "array-bracket-newline": ["error", { "multiline": true, "minItems": 3, "consistent": true }],
  "array-element-newline": ["error", {
    "ArrayExpression": "consistent",
    "ArrayPattern": { "minItems": 3 },
  }],
  "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 1 }],
  "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
  "padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    }
  ],
  " object-property-newline": [
    "error", { "allowAllPropertiesOnSameLine": true }
  ],
  "max-lines": [
    "error",
    {
      "max": 300,
      "skipComments": true,
      "skipBlankLines": true
    }
  ],
  "eol-last": ["error", "always"],
};
