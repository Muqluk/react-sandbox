const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

const env = require('./env');

const resolve = () => {
  const {
    aliasPaths, //
    allowedExtensions,
    appPath,
    projectPath,
  } = env;

  const section = {
    alias: aliasPaths,
    extensions: [...allowedExtensions],
    modules: [
      'node_modules', //
      projectPath,
      appPath,
    ].filter(Boolean),
    plugins: [PnpWebpackPlugin].filter(Boolean),
  };

  return section;
};

module.exports = resolve();
