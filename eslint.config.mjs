import { defineConfig, globalIgnores } from "eslint/config";

import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
 ...nextVitals,
 ...nextTs,
 {
  plugins: {
   "unused-imports": unusedImports,
   import: importPlugin,
  },
  rules: {
   // Unused imports
   "unused-imports/no-unused-imports": "error",
   "unused-imports/no-unused-vars": [
    "warn",
    {
     vars: "all",
     varsIgnorePattern: "^_",
     args: "after-used",
     argsIgnorePattern: "^_",
    },
   ],

   // Import order
   "import/order": [
    "error",
    {
     groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
     "newlines-between": "always",
     alphabetize: {
      order: "asc",
      caseInsensitive: true,
     },
    },
   ],
   "import/newline-after-import": "error",
   "import/no-duplicates": "error",
  },
 },
 // Override default ignores of eslint-config-next.
 globalIgnores([
  // Default ignores of eslint-config-next:
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
 ]),
]);

export default eslintConfig;
