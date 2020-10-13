/* eslint-disable @typescript-eslint/no-var-requires */
// const json = require("@rollup/plugin-json");
const { cleandir } = require("rollup-plugin-cleandir");
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";

module.exports = {
  input: ["./src/index.ts"],
  output: {
    dir: "./lib",
    format: "cjs",
  },
  plugins: [
    cleandir("./lib"),
    typescript(),
    babel({ babelHelpers: "bundled" }),
  ],
};
