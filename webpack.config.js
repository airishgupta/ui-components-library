const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const { readdirSync, lstatSync } = require("fs");

let entryObject = {};
const componentFolder = path.resolve(__dirname, "./src/components");
console.log("Component Folder", componentFolder);
readdirSync(componentFolder).forEach((componentName) => {
  if (lstatSync(`${componentFolder}/${componentName}`).isDirectory()) {
    entryObject[componentName] = `./src/components/${componentName}/`;
  }
});

module.exports = (env) => {
  if (env && env.component) {
    entryObject = { [env.component]: `./components/${env.component}/src` };
  }
  console.log("ENTRY OBJ :: ", entryObject);
  return {
    entry: {
      ...entryObject,
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    output: {
      filename: "[name]/index.js",
      path: path.resolve(__dirname, "./cdn"),
      libraryTarget: "commonjs2",
    },
    mode: "development",
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-object-rest-spread"],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./[name]/style.css",
      }),
    ],
  };
};
