const path = require('path');
const fs = require('fs');

const env = () => {
  const root = fs.realpathSync(process.cwd());
  const isProd = process.env.NODE_ENV === 'production';
  const nodeEnv = process.env.NODE_PATH || '';
  const appPath = path.join(root, 'src');

  process.env.NODE_PATH = nodeEnv
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(root, folder))
    .join(path.delimiter);

  const envValues = {
    isProd,
    /* paths */
    projectPath: root,
    appPath,
    buildPath: path.join(root, 'build'),
    staticAssets: path.join(root, 'public'),
    devtool: isProd ? undefined : 'source-map',
    /* */
    /* devServer */
    url: 'localhost',
    port: 2593,
    allowedHosts: ['auto'],
    headers: {},
    errOverlay: {
      errors: false,
      warnings: false,
    },
    /* ... */
    allowedExtensions: [
      '.js', //
      '.jsx',
      '.ts',
      '.tsx',
      '.mdx',
    ],
    aliasPaths: {
      '~': path.resolve(root),
      src: path.resolve(appPath),
      '@assets': path.resolve(path.join(root, 'assets')),
    },
    externals: [].filter(Boolean),
  };

  return envValues;
};

module.exports = env();
