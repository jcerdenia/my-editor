const path = require("path");
const src = path.join(process.cwd(), "src", "electron");

module.exports = {
  mode: "development", // Indicates we are running in a dev environment.
  devtool: "source-map", // Enables source map file generation for debug purposes.
  entry: path.join(src, "main.ts"), // Main entry point of electron app.
  // Defines path and filename of electron bundle that will be generated from webpack:
  output: {
    // same folder used from angular cli to generate bundle of the angular app:
    path: path.join(process.cwd(), "dist", "my-editor"),
    filename: "shell.js", // avoids conflict with main.js
  },
  // Instructs webpack to load ts-loader for handling TS files:
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: path.join(src, "tsconfig.json"),
        },
      },
    ],
  },
  target: "electron-main", // Indicates we are running in the main process of electron.
};
