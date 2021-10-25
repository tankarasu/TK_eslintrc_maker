/* eslint sort-keys:"error"*/

export const functions = {
  "arrow-body-style": [
    "error", "as-needed", { requireReturnForObjectLiteral: true }
  ],
  "arrow-parens": ["error", "always"],
  complexity: "off",
  "consistent-return": "error",
  "func-name-matching": "off",
  "func-names": ["error", "always"],
  "func-style": ["error", "declaration"],
  "function-paren-newline": "off",
  "implicit-arrow-linebreak": ["error", "beside"],
  "max-lines-per-function": "off",
  "max-nested-callbacks": ["error", 3],
  "max-params": ["error", 3],
  "max-statements": ["error", 5],
  "no-caller": "error",
  "no-confusing-arrow": ["error", { allowParens: true }],
  "no-dupe-args": "error",
  "no-else-return": ["error", { allowElseIf: true }],
  "no-empty-function": "error",
  "no-extra-bind": "error",
  "no-func-assign": "error",
  "no-loop-func": "error",
  "no-new-func": "error",
  "no-param-reassign": ["error", { props: false }],
  "no-useless-call": "error",
  "no-useless-return": "off",
  "nonblock-statement-body-position": "off",
  "padded-blocks": ["error", "never"],
  "prefer-arrow-callback": "off",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "wrap-iife": "error"
};
