const path = require("path");

const env = () => {
  const root = path.resolve(process.cwd());
  const isProd = process.env.NODE_ENV === "production";

  const envValues = {
    isProd,
    /* paths */
    projectPath: root,
    appPath: path.join(root, "src"),
    buildPath: path.join(root, "build"),
    staticAssets: path.join(root, "public"),
    /* */
    /* devServer */
    url: "localhost",
    port: 2593,
    allowedHosts: ["auto"],
    headers: {},
    errOverlay: {
      errors: false,
      warnings: false,
    },
    /* ... */
    allowedExtensions: ["..."],
    aliasPaths: {},
    externals: [].filter(Boolean),
  };

  return envValues;
};

module.exports = env();
