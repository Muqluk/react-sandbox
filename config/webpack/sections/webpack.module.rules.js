const rules = () => {
  const postcssLoader = {
    loader: require.resolve('postcss-loader'),
    options: {
      // ident: 'postcss',
      postcssOptions: {
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
      sourceMap: true,
    },
  };

  const cssLoader = {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      sourceMap: true,
    },
  };

  return [
    {
      oneOf: [
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            require.resolve('style-loader'), //
            cssLoader,
            postcssLoader,
          ],
        },
        {
          test: /\.module\.css$/,
          exclude: /\.css$/,
          use: [
            require.resolve('style-loader'), //
            cssLoader,
            postcssLoader,
          ],
        },
        {
          test: /\.less$/i,
          use: [
            require.resolve('style-loader'), //
            cssLoader,
            postcssLoader,
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  sourceMap: true,
                  javascriptEnabled: true,
                  plugins: [require('@cc/ui-components/dist/Styles/less-plugins/less-plugins')],
                },
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: [
              require.resolve('@babel/preset-env'), //
              require.resolve('@babel/preset-react'),
            ],
            sourceMaps: true,
          },
        },
        {
          type: 'asset/resource',
          test: [/^\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        },
      ],
    },
  ];
};

module.exports = rules();
