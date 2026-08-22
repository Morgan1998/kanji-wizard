import globals from "globals";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // ADD THIS LINE AT THE TOP:
  { ignores: ["dist/"] },

  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
];
