// const { cleandir } = require("rollup-plugin-cleandir");
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
const analyze = require("rollup-plugin-analyzer");

const extensions = [".ts", ".tsx"];

module.exports = {
  input: ["./src/index.ts"],
  output: [
    {
      dir: "./lib",
      format: "cjs",
      preserveModules: true,
    },
    {
      dir: "./esm",
      format: "es",
      preserveModules: true,
    },
  ],
  external: ["react"],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    typescript(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions,
    }),
    analyze(),
  ],
};
