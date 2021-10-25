// Internals requirements
import { settings } from "./settings/settings.js";
import { spacing } from "./spacing/spacing.js";
import { overrides } from "./settings/overrides.js";
import { classes } from "./class/classes.js";
import { functions } from "./function/functions.js";
import { style } from "./styles/styles.js";
import { variable } from "./variable/variable.js";
import { typescript } from "./typescript/typescript.js";
import { ES6 } from "./ES6/ES6.js";
import { regex } from "./regex.js";

export const finalFile = {
  ...settings,
  rules: {
    ...spacing,
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
