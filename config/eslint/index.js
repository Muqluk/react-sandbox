const path = require("path");

const config = () => {
  const lintConfig = {
    extends: [
      "eslint:recommended",
      "react/recommended",
      "import/recommended",
      "react-hooks/recommended",
    ],
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
      "import/parsers": {
        "@babel/eslint-parser": [".js", ".jsx"],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".less"],
          moduleDirectory: ["node_modules", "src", "assets"],
        },
        webpack: {
          config: "webpack.config.js",
          env: {
            NODE_ENV: "development",
            production: true,
          },
        },
      },
    },
    plugins: [
      "react", //
      "react-hooks",
      "import",
    ],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      "comma-dangle": ["error", "only-multiline"],
      "import/extensions": 0,
      "import/prefer-default-export": 0,
      "no-console": "warn",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/webpack.*.js", //
            "**/.storybook/**",
            "**/stories/**",
            "**/*.stories.*",
          ],
        },
      ],
      "array-element-newline": [
        "error",
        {
          ArrayExpression: "consistent",
          ArrayPattern: { minItems: 3 },
        },
      ],
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".jsx", ".tsx", ".svg", ".mdx"],
        },
      ],
    },
  };

  return lintConfig;
};

module.exports = config();
