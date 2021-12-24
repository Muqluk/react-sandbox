const path = require('path');

module.exports = {
  presets: [
    '@babel/env', //
    '@babel/react',
  ],
  plugins: [
    [
      'styless',
      {
        cwd: 'babelrc',
        import: path.join(process.cwd(), 'assets', 'styles', 'styless-variables.less'),
      },
    ],
  ],
};
