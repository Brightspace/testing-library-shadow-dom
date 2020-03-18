import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import license from 'rollup-plugin-license';

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
      license({
        sourcemap: true,
        banner: {
          content: {
            file: path.join(__dirname, 'LICENSE'),
          },
        },
        thirdParty: {
          output: {
            file: path.join(__dirname, 'lib', 'LICENSE'),
          },
        },
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
