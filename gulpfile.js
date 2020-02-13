const { series, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const tsProject = ts.createProject('tsconfig.json', { emitDeclarationOnly: true, });

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const babelConfig = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: ['@babel/proposal-class-properties'],
};

// 清空lib、types、dist构建目录
function cleanDistTask() {
  return src(['dist'], { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
}

// 清空Types目录
function cleanTypesTask() {
  return src(['types'], { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
}

// 构建types
function buildTypesTask() {
  const tsResult = src("src/*.ts")
    .pipe(tsProject());
  return tsResult.dts.pipe(dest('types'))
}

function rollupWithOption(inputOption, outOption) {
  return rollup.rollup(inputOption).then(bundle => bundle.write(outOption));
}


// 构建umd包。可以扩展
async function rollupTask() {

  const inputOption = {
    input: 'src/index.ts',
    plugins: [
      // Allows node_modules resolution
      resolve({ extensions }),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs(),
      // Compile TypeScript/JavaScript files
      babel({ ...babelConfig, extensions, exclude: 'node_modules/**', }),
      // Minify generated es bundle
      terser(),
    ]
  };

  await rollupWithOption(inputOption, { file: 'dist/jsaber.umd.js', format: 'umd', name: 'jsaber', exports: 'named' });
  await rollupWithOption(inputOption, { file: 'dist/jsaber.esm.js', format: 'esm' });
  await rollupWithOption(inputOption, { file: 'dist/jsaber.min.js', format: 'iife', name: 'jsaber', exports: 'named' });

}


exports.buildTypes = series([cleanTypesTask, buildTypesTask]);

exports.default = series([cleanDistTask, rollupTask]);
