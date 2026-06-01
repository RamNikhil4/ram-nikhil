import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        config: {},
        whitelist: [
          "^glass(-.*)?$",
          "^glow-.*$",
          "^gradient-.*$",
          "^hero-.*$",
          "^section-.*$",
          "^avatar-.*$",
          "^animate-.*$",
          // Whitelist custom theme colors, shadows, and modifiers
          "^(text|bg|border|border-[trblxy]|shadow|from|via|to|ring|outline|divide|divide-[trblxy]|stroke|fill|placeholder)-(accent|teal|rose|amber|border|bg-primary|bg-secondary|bg-card|bg-glass|text-primary|text-secondary|text-muted)([-/].*)?$",
          "^font-(heading|body|mono)$",
          // Whitelist Tailwind v4 dynamic opacities for white/black
          "^(bg|border|text|divide|ring|outline)-(white|black)/.*$",
        ],
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "old_version/**",
  ]),
]);

export default eslintConfig;
