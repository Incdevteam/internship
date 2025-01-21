import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import tsEslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import globals from 'globals'
import jsEslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  // General settings
  {
    name: 'general options',
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    languageOptions: {
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsEslint.parser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
        ecmaFeatures: {
          jsx: true,
          arrowFunctions: true,
          globalReturn: false,
        },
      },
    },
  },
  // Ignored paths
  {
    name: 'ignored paths',
    ignores: [
      '**/node_modules',
      '**/.pnpm-store/',
      '**/.next/',
      '**/out/',
      '**/dist/',
      '**/build/',
      '**/public',
      '**/pnpm-lock.yaml',
      '**/.pnpm-debug.log',
      '**/.eslintcache',
      '**/next-env.d.ts',
      '**/coverage/**',
      '**/__tests__/**',
      '.next',
      '*.config.{js,ts,mjs}',
      '**/tsconfig.json',
      '**/prettier.config.js',
      '**/stylelint.config.js',
      '**/lint-staged.config.js',
      '**/tsconfig.json',
      '**/.env*',
      '**/.idea/',
      '**/.DS_Store',
      '.storybook-static',
    ],
  },
  // JavaScript rules
  {
    name: 'eslint/recommended',
    rules: jsEslint.configs.recommended.rules,
  },
  ...tsEslint.configs.recommended,
  // TypeScript rules
  {
    name: 'typescript/rules',
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': 'allow-with-description',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
  },
  // React rules
  {
    name: 'react/recommended',
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/button-has-type': 'error',
      'react/display-name': 'off',
      'react/jsx-boolean-value': ['error'],
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'ignore', propElementValues: 'always', props: 'always' },
      ],
      'react/jsx-fragments': ['error'],
      'react/prop-types': 'off',
      'react/void-dom-elements-no-children': ['error'],
    },
  },
  // React Hooks rules
  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    name: 'next/core-web-vitals',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  // Prettier rules
  {
    name: 'prettier/recommended',
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Import rules
  {
    name: 'import/recommended',
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'import/extensions': [
        'error',
        { css: 'always', json: 'always', scss: 'always', svg: 'always' },
      ],
      'import/no-duplicates': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
    },
  },
  // Perfectionist rules (sorting imports)
  {
    name: 'perfectionist/sort-imports',
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: 'react',
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            'builtin',
            'external',
            'internal-type',
            'internal',
            'side-effect',
            'style',
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
  // Custom rules
  {
    name: 'custom-rules',
    rules: {
      'arrow-parens': ['warn', 'as-needed'],
      'consistent-return': 'off',
      curly: ['error', 'all'],
      'max-lines': ['error', 300],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'off',
      'no-duplicate-imports': 'error',
      'no-empty-pattern': 'off',
      'no-nested-ternary': 'error',
      'no-undef': 'warn',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
      ],
      'prefer-const': 'error',
    },
  },
  /// Storybook rules
  {
    name: 'storybook/rules',
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
  {
    name: 'storybook/main',
    files: ['.storybook/main.@(js|cjs|mjs|ts)'],
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
  },
  {
    name: 'storybook/stories',
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'no-console': 'off',
    },
  },
]
