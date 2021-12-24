const rules = () => {
  return [
    {
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      options: {
        presets: [
          require.resolve("@babel/preset-env"),
          require.resolve("@babel/preset-react"),
        ],
        sourceMaps: true,
      },
    },
  ];
};

module.exports = rules();
