/* eslint-disable @typescript-eslint/no-var-requires */
// const json = require("@rollup/plugin-json");
const { cleandir } = require("rollup-plugin-cleandir");
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

module.exports = {
  input: ["./src/index.ts"],
  output: {
    dir: "./lib",
    format: "cjs",
    preserveModules: true,
    exports: "named",
  },
  external: ["react"],
  plugins: [
    cleandir("./lib"),
    nodeResolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: "bundled" }),
  ],
};
