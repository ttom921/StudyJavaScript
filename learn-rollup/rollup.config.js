import replace from "rollup-plugin-replace";
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import { eslint } from "rollup-plugin-eslint";

let ENV = 'development';
export default {
    input: 'src/scripts/main.js',
    output: {
        globals: {
            'axios': 'axios',
            'rxios': 'rxios'
        },
        file: 'build/js/bundle.min.js',
        format: 'umd',
        name: 'monitor',
        sourceMap: true // 'inline'
    },
    plugins: [
        eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**'],
            exclude: ['node_modules/**']
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        //(console.log(ENV)),
        //(console.log(process.env.NODE_ENV)),
        //(console.log(process.env.NODE_ENV == 'produciton')),
        (process.env.NODE_ENV === 'produciton' && uglify())
    ]
}