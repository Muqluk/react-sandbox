const path = require('path');

const babelCfg = () => {
  const finalCfg = {
    presets: [
      '@babel/env', //
      '@babel/react',
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
    ],
  };

  return finalCfg;
};

module.exports = babelCfg();
