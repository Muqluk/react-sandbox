const path = require("path");
const devServer = require("./webpack.devserver");

module.exports = (api) => {
  const isProd = process.env.NODE_ENV === "production";
  const projectPath = path.resolve(process.cwd());

  const base = {
    mode: isProd ? "production" : "development",
    context: projectPath,
    entry: "./src/index.js",
    target: "web",
    output: {
      clean: true,
      filename: "js/bundle.[chunkhash:8].js",
      path: isProd ? `${projectPath}/build` : undefined,
      publicPath: isProd ? "https://path_from_env_vars/" : auto,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
        },
      ],
    },
    // resolve: {},
    // plugins: [],
    // stats: '',
    devServer: {
      allowedHosts: ["auto"],
      host: "localhost",
      port: 2593,
    },
  };

  console.dir(base);

  return base;
};
