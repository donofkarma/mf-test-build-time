const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

const pkg = require('./package.json');

module.exports = {
  input: './src/components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      compilerOptions: {
        declaration: false,
        declarationMap: false,
        incremental: false,
      },
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
  // Why is @babel/runtime a regex? https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
  external: [/@babel\/runtime/, 'react', 'react-dom'],
};
