import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default {
  input: 'src/lib/CardFlip/index.tsx',
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
    resolve(),
    commonjs(),
    postcss({
      modules: true,
      extract: true,
      minimize: true,
      autoModules: true,
      namedExports: true
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      clean: true,
      tsconfigOverride: {
        include: ['src/lib/**/*', 'src/types/**/*'],
        exclude: ['src/app/**/*', 'node_modules', '**/__tests__/*', '**/*.test.tsx']
      }
    }),
  ],
  external: ['react', 'react-dom'],
}; 