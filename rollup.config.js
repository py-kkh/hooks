import clear from "rollup-plugin-clear";
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
      exports: "named",
    },
    {
      dir: "./esm",
      format: "es",
      preserveModules: true,
      exports: "named",
    },
  ],
  external: ["react"],
  plugins: [
    clear({
      targets: ["lib", "esm"],
    }),
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
