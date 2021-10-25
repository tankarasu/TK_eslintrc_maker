/* eslint sort-keys:"error"*/

export const lines = {
  "array-bracket-newline": ["error", { minItems: 3 }],
  "array-element-newline": ["error", { ArrayExpression: "consistent",
    ArrayPattern: { minItems: 3 } }],
  "eol-last": ["error", "always"],
  "max-lines": ["error",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
  "newline-before-return": "error",
  "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
  "no-multiple-empty-lines": ["error", {
    max: 2, maxBOF: 0, maxEOF: 1
  }],
  "no-unexpected-multiline": "error",
  "object-curly-newline": ["error", { minProperties: 3 }],
  "padding-line-between-statements": ["error",
    {
      blankLine: "always",
      next: "return",
      prev: "*"
    }]
  // TODO: fix this
  // " object-property-newline": [
  //   "error", { "allowAllPropertiesOnSameLine": true }
  // ],
};
