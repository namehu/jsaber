const { series, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const terser = require('gulp-terser');
const babel = require('gulp-babel');

const rollup = require('rollup');
// const rBabel = require('rollup-plugin-babel');
const { uglify: rUglify } = require('rollup-plugin-uglify');

const tsProject = ts.createProject('tsconfig.json');

const babelConfig = {
  presets: ['@babel/preset-env']
};

// 清空lib、types、dist构建目录
function cleanTask() {
  return src(['lib', 'types', 'dist'], { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
}

// 编译ts
function buildTsTask() {
  const tsResult = src("src/*.ts") // or tsProject.src()
    .pipe(tsProject());

  tsResult.js
    .pipe(babel(babelConfig))
    .pipe(terser())
    .pipe(dest('lib'));
  return tsResult.dts.pipe(dest('types'));
}

// 构建umd包。可以扩展
async function rollupTask() {
  const bundle = await rollup.rollup({
    input: 'lib/index.js',
    plugins: [
      // rBabel({ ...babelConfig, exclude: 'node_modules/**', }),
      rUglify(),
    ]
  });
  await bundle.write({
    file: 'dist/jsaber.min.js',
    name: 'jsaber',
    exports: 'named',
    format: 'umd',
  });
}


exports.default = series([cleanTask, buildTsTask, rollupTask])
