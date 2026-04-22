// eslint.config.js
module.exports = [
  {
    ignores: ['.next/*', 'out/*', 'node_modules/*'], // Что игнорировать
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
