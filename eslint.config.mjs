import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**', 'reports/**', 'public/**'] },
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
