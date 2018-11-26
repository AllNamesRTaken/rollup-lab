import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

var plugins = [
    // nodeResolve({
    //     module: true,
    //     jsnext: true,
    //     main: true,
    //     preferBuiltins: false
    // }),
    // commonjs({
    //     include: 'node_modules/**',  // Default: undefined
    //     ignoreGlobal: false,  // Default: false
    // }),
    typescript(/*{ plugin options }*/),
    babel({
        exclude: 'node_modules/**',
    }),
    uglify(),
];

export default [{
    input: 'src/index.ts',
    plugins,
    output: {
        file: 'dist/index.js',
        format: 'iife',
        name: pkg.name,
        sourcemap: true,
    }
},
];