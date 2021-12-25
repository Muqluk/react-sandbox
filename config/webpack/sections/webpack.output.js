const env = require('./env');

const section = () => {
  const { isProd, buildPath } = env;

  const output = {
    clean: true,
    filename: 'js/bundle.[chunkhash:8].js',
    path: isProd ? buildPath : undefined,
    publicPath: isProd ? 'https://path_from_env_vars/' : './',
    assetModuleFilename: 'media/[name].[hash:8].[ext]',
  };

  return output;
};

module.exports = section();
