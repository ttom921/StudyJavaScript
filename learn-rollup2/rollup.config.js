import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
let ENV = 'development';
export default {
    input: "src/index.ts",
    output: [
        // {
        //     file: "dist/index.esm.browser.js",
        //     format: "es",
        //     sourceMap: true // 'inline'
        // },
        {
            file: "dist/index.js",
            format: "umd",
            name: "monitor",
            sourcemap: true
        }
    ],
    plugins: [
        commonjs(),
        resolve(),
        babel({
            exclude: [/\/core-js\//],
            runtimeHelpers: true,
            sourceMap: true,
            extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts"]
        }),
        //(console.log(ENV)),
        //(console.log(process.env.NODE_ENV)),
        //(console.log(process.env.NODE_ENV == 'produciton')),
        (process.env.NODE_ENV === 'produciton' && terser())
    ]
};