import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
let ENV = 'development';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

const name = 'RollupTypeScriptBabel';

export default {
    input: './src/index.ts',

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [],

    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] }),
        (process.env.NODE_ENV === 'produciton' && terser())
    ],

    output: [
        {
            file: pkg.browser,
            format: 'iife',
            name: 'monitor',

            // https://rollupjs.org/guide/en#output-globals-g-globals
            globals: {},
        }],
};