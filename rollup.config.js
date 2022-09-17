import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/main.ts",
    output: [
        {
            format: "umd",
            sourcemap: true,
            name: "jsCheck",
            file: `dist/js-check.umd.js`,
        },
    ],
    plugins: [typescript(), terser()],
};
