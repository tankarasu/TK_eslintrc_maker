/* eslint sort-keys:"error"*/

import { classes } from "../style/classes.js";
import { comments } from "../style/comment.js";
import { conditions } from "../style/conditions.js";
import { ES6 } from "../style/ES6.js";
import { functions } from "../style/functions.js";
import { lines } from "../style/lines.js";
import { loops } from "../style/loops.js";
import { objects } from "../style/object.js";
import { operators } from "../style/operators.js";
import { others } from "../style/others.js";
import { regex } from "../style/regex.js";
import { spacing } from "../style/spacing.js";
import { style } from "../style/style.js";
import { typescript } from "../style/typescript.js";
import { variable } from "../style/variable.js";

export const rules = {
  ...functions,
  ...ES6,
  ...others,
  ...variable,
  ...operators,
  ...regex,
  ...loops,
  ...conditions,
  ...objects,
  ...classes,
  ...lines,
  ...comments,
  ...typescript,
  ...style,
  ...spacing
};
