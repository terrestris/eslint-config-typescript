import tsEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const customRules = {
  'quote-props': ['warn', 'as-needed'],
  'keyword-spacing': 'error',
  '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],
  '@stylistic/member-delimiter-style': [
    'warn',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      }
    }
  ],
  '@stylistic/quotes': ['warn', 'single'],
  '@stylistic/semi': ['warn', 'always'],
  '@stylistic/type-annotation-spacing': 'warn',
  '@typescript-eslint/member-ordering': 'warn',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase']
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false
      }
    }
  ],
  'camelcase': 'warn',
  'comma-dangle': 'off',
  'curly': 'warn',
  'dot-notation': 'warn',
  'eol-last': 'warn',
  'eqeqeq': ['warn', 'smart'],
  'guard-for-in': 'warn',
  'id-denylist': [
    'warn',
    'any',
    'Number',
    'number',
    'String',
    'string',
    'Boolean',
    'boolean',
    'Undefined',
    'undefined'
  ],
  'id-match': 'warn',
  'max-len': ['warn', { code: 120 }],
  'no-bitwise': 'warn',
  'no-caller': 'warn',
  'no-console': 'warn',
  'no-debugger': 'warn',
  'no-empty': 'warn',
  'no-eval': 'warn',
  'no-fallthrough': 'warn',
  'no-multiple-empty-lines': 'warn',
  'no-new-wrappers': 'warn',
  'no-redeclare': 'warn',
  'no-shadow': ['warn', { hoist: 'all' }],
  'no-trailing-spaces': 'warn',
  'no-underscore-dangle': ['error', { allowAfterThis: true }],
  'no-unused-expressions': 'warn',
  'no-unused-labels': 'warn',
  'radix': 'warn',
  'spaced-comment': 'warn'
};

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true
      },
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      '@stylistic': stylistic
    },
    rules: customRules
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...customRules,
      // Disable typescript-specific rules for JS files
      '@typescript-eslint/switch-exhaustiveness-check': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
