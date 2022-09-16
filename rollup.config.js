import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
const name = "js-check";

export default {
    input: "src/main.ts",
    output: [
        {
            format: "umd",
            sourcemap: true,
            name: "jsCheck",
            file: `dist/${name}.umd.js`,
        },
        {
            format: "module",
            sourcemap: true,
            file: `dist/${name}.module.js`,
        },
    ],
    plugins: [typescript(), terser()],
};
