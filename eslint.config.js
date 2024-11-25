import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
// import tseslint from 'typescript-eslint'
// import path from "node:path";
import * as parserTypescript from "@typescript-eslint/parser";
import * as path from "node:path";

// export default tseslint.config(
//   { ignores: ['dist', 'node_modules'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': pluginReactHooks,
//       'react-refresh': pluginReactRefresh,
//     },
//     rules: {
//       ...pluginReactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )

export default [
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/bun.lockb",
      "**/build",
      "**/output",
      "**/coverage",
      "**/temp",
      "**/.vitepress/cache",
      "**/.nuxt",
      "**/.next",
      "**/.vercel",
      "**/.changeset",
      "**/.idea",
      "**/.cache",
      "**/.output",
      "**/.vite-inspect",

      "**/CHANGELOG*.md",
      "**/*.min.*",
      "**/LICENSE*",
      "**/__snapshots__",
      "**/auto-import?(s).d.ts",
      "**/components.d.ts",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
    name: "base",
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    name: "react",
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      /*
              override base rules
           */
      "func-names": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        project: ["./tsconfig.json", "./renderer/tsconfig.json"],
        tsconfigRootDir: path.resolve(),
      },
    },
    name: "typescript",
    plugins: {
      "@typescript-eslint": pluginTypescript,
    },
    rules: {
      ...pluginTypescript.configs.recommended.rules,
    },
  },
];
