import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    rules: {
      camelcase: 'off',
      'no-unused-vars': 'error',
      'spaced-comment': 'error',
      'no-unused-expressions': 'warn',
      'no-duplicate-imports': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;
