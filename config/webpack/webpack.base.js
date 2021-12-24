const PnpWebpackPlugin = require('pnp-webpack-plugin');
const env = require('./sections/env');
const moduleRules = require('./sections/webpack.module.rules');
const plugins = require('./sections/webpack.plugins');
const devServer = require('./sections/webpack.devserver');

module.exports = () => {
  const { isProd, projectPath, buildPath, aliasPaths, allowedExtensions } = env;
  const base = {
    mode: isProd ? 'production' : 'development',
    context: projectPath,
    entry: './src/index.jsx',
    target: 'web',
    output: {
      clean: true,
      filename: 'js/bundle.[chunkhash:8].js',
      path: isProd ? buildPath : undefined,
      publicPath: isProd ? 'https://path_from_env_vars/' : './',
    },
    module: {
      rules: moduleRules,
    },
    resolve: {
      alias: aliasPaths,
      extensions: [...allowedExtensions.filter(Boolean)],
      modules: ['node_modules'].filter(Boolean),
      plugins: [PnpWebpackPlugin].filter(Boolean),
    },
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    plugins,
    devServer,
    // stats: '',
  };

  return base;
};
