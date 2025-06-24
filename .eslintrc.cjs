module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
      node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: false,
      },
      project: ['./tsconfig.app.json'],
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // отключает правила, конфликтующие с Prettier
    ],
    plugins: ['@typescript-eslint', 'vue'],
    ignorePatterns: ['dist', 'node_modules', '*.config.js'],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off', // можно включить по желанию
    },
  }
  