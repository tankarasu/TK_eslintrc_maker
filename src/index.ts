/* eslint-disable no-underscore-dangle */

// Core Modules requirement
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Internal requirements
import { finalFile as rules } from "./template/template.js";

// Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eslintrc = { ...rules };

const rootDirectory = path.resolve(__dirname, "../..");
const outputDirectory = path.join(rootDirectory, "output");

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, ".eslintrc.json"), JSON.stringify(eslintrc));

