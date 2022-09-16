import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/main.ts",
    output: [
        {
            format: "umd",
            sourcemap: true,
            name: "jsCheck",
            file: `dist/${pkg.name}.umd.js`,
        },
        {
            format: "module",
            sourcemap: true,
            file: `dist/${pkg.name}.module.js`,
        },
    ],
    plugins: [typescript(), terser()],
};
