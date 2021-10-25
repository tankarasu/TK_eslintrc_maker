/* eslint sort-keys:"error"*/

export const spacing = {
  "array-bracket-spacing": ["error",
    "never"],
  "arrow-spacing": ["error",
    { after: true,
      before: true }],
  "block-spacing": "error",
  "comma-spacing": ["error",
    { after: true,
      before: false }],
  "computed-property-spacing": ["error",
    "never"],
  "func-call-spacing": ["error",
    "never"],
  "generator-star-spacing": ["error",
    { after: true,
      before: false }],
  "key-spacing": ["error",
    { beforeColon: false }],
  "keyword-spacing": ["error",
    {
      after: true,
      before: true,
      overrides: {
        for: { after: false },
        if: { after: false },
        while: { after: false }
      }
    }],
  "no-multi-spaces": "error",
  "no-trailing-spaces": "error",
  "no-whitespace-before-property": "error",
  "object-curly-spacing": ["error",
    "always"],
  "rest-spread-spacing": ["error",
    "never"],
  "space-before-blocks": ["error",
    {
      classes: "never",
      functions: "never",
      keywords: "always"
    }],
  "space-before-function-paren": ["error",
    {
      anonymous: "always",
      asyncArrow: "never",
      named: "never"
    }],
  "space-in-parens": ["error",
    "never"],
  "space-infix-ops": "error",
  "space-unary-ops": ["error",
    {
      nonwords: false,
      overrides: { "++": false },
      words: true
    }],
  "switch-colon-spacing": ["error",
    { after: true,
      before: false }],
  "template-curly-spacing": ["error",
    "never"],
  "template-tag-spacing": ["error",
    "never"],
  "yield-star-spacing": ["error",
    { after: true,
      before: false }]
};
