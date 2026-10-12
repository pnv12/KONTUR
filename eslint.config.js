import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      '.github/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      }
    },
    rules: {
      'no-eval': 'error',
      'no-new-func': 'error'
    }
  },
  ...tseslint.configs.recommended
];
