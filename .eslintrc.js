const path = require('path');

module.exports = {
  extends: ['prettier', 'plugin:import/recommended', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    Webpack: true,
  },
  settings: {
    'import/parsers': {
      '@babel/eslint-parser': ['.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
      webpack: {
        config: 'webpack.config.js',
        env: {
          NODE_ENV: 'development',
          production: true,
        },
      },
    },
  },
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/webpack.*.js', //
          '**/.storybook/**',
          '**/stories/**',
          '**/*.stories.*',
        ],
      },
    ],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 3 },
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.svg', '.mdx'],
      },
    ],
  },
};
