import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
    {
        input: './src/index.js',
        output: {
            dir: 'lib',
            format: 'es',
        },
        plugins: [
            resolve({
                browser: true,
            }),
            commonjs(),
            replace({
                include: /node_modules/,
                querySelector: 'deepQuerySelector',
                querySelectorAll: 'deepQuerySelectorAll',
            }),
        ],
    },
];