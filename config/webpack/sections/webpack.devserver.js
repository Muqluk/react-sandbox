const env = require("./env");

devServer = () => {
  const { allowedHosts, staticAssets, port, errOverlay, headers } = env;

  return {
    allowedHosts: allowedHosts.filter(Boolean),
    headers,
    bonjour: false,
    client: {
      logging: "error", //  'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
      overlay: errOverlay,
      progress: true,
    },
    compress: false,
    historyApiFallback: true,
    host: "localhost",
    hot: true,
    liveReload: false,
    open: true,
    port,
    static: staticAssets,
    devMiddleware: {
      // more info on devMiddleware
      // https://github.com/webpack/webpack-dev-middleware
      index: true,
      publicPath: "/",
      writeToDisk: false,
    },
  };
};

module.exports = devServer();
