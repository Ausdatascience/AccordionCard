const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const pkg = require('./package.json');

module.exports = {
  input: 'src/components/CardFlip/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      inject: false
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        include: ['src/components/**/*', 'src/types/**/*'],
        exclude: ['src/app/**/*', 'node_modules', '**/__tests__/*', '**/*.test.tsx'],
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist',
          target: 'es5',
          jsx: 'react'
        }
      }
    }),
  ],
  external: ['react', 'react-dom'],
}; 