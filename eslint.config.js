import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': ["error", "always"],
      '@stylistic/eol-last': ["error", "always"],
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/no-multi-spaces': "error",
      '@stylistic/arrow-spacing': "error",
      '@stylistic/arrow-parens': ["error", "always"],
      '@stylistic/no-trailing-spaces': "error",
      '@stylistic/array-bracket-spacing': ["error", "never"],
      '@stylistic/block-spacing': "error",
      '@stylistic/brace-style': "error",
      '@stylistic/comma-spacing': ["error", { "before": false, "after": true }]
    }
  },
])
