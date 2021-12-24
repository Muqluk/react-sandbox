const PnpWebpackPlugin = require('pnp-webpack-plugin');
const env = require('./sections/env');
const output = require('./sections/webpack.output');
const resolve = require('./sections/webpack.resolve');
const moduleRules = require('./sections/webpack.module.rules');
const plugins = require('./sections/webpack.plugins');
const devServer = require('./sections/webpack.devserver');

module.exports = () => {
  const { isProd, projectPath } = env;

  const base = {
    mode: isProd ? 'production' : 'development',
    context: projectPath,
    entry: './src/index.jsx',
    target: 'web',
    output,
    module: {
      rules: moduleRules,
    },
    resolve,
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    plugins,
    devServer,
    stats: 'errors-warnings',
  };

  return base;
};
