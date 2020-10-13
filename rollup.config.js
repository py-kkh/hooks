/* eslint-disable @typescript-eslint/no-var-requires */
// const json = require("@rollup/plugin-json");
const { cleandir } = require("rollup-plugin-cleandir");
// const { nodeResolve } = require("@rollup/plugin-node-resolve");
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";

module.exports = {
  input: ["./src/index.ts"],
  output: {
    dir: "./lib",
    format: "cjs",
  },
  plugins: [
    // cleandir("./lib"),
    typescript(),
    babel({ babelHelpers: "bundled" }),
    //     typescript({
    //       tsconfigOverride: {
    //         compilerOptions: {
    //           module: "ESNext",
    //         },
    //       },
    //     }),
    //     nodeResolve({
    //       extensions,
    //       modulesOnly: true,
    //       preferredBuiltins: false,
    //     }),
    //     json(),
  ],
};
