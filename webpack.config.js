const cfg = require("./config/webpack/webpack.base");

module.exports = (api) => {
  const webpackCfg = cfg(api);
  console.dir(webpackCfg);
  return webpackCfg;
};
