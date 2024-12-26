import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    'AccordionCard-core'
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
      clean: true
    }),
    postcss({
      extensions: ['.css'],
      minimize: true,
      modules: true
    }),
    json()
  ]
}; 