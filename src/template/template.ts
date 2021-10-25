// Internals requirements
import { settings } from "./settings/settings.js";
import { overrides } from "./settings/overrides.js";
import { rules } from "./settings/rules.js";

export const finalFile = {
  ...settings,
  rules: { ...rules },
  overrides: [overrides]
};
