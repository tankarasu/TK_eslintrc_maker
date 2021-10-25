// Internals requirements
import { settings } from "./settings/settings.js";
import { overrides } from "./settings/overrides.js";
import { classes } from "./class/classes.js";
import { functions } from "./function/functions.js";
import { style } from "./style/style.js";
import { variable } from "./variable/variable.js";
import { typescript } from "./typescript/typescript.js";
import { ES6 } from "./ES6/ES6.js";
import { regex } from "./regex.js";
import { comments } from "./comment.js";
import { ternary } from "./ternary.js";

export const finalFile = {
  ...settings,
  rules: {
    ...comments,
    ...ternary,
    ...classes,
    ...functions,
    ...style,
    ...variable,
    ...ES6,
    ...typescript,
    ...regex
  },
  overrides: [
    overrides
  ]
};
