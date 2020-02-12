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
    // .pipe(babel(babelConfig))
    // .pipe(terser())
    .pipe(dest('lib'));
  return tsResult.dts.pipe(dest('types'));
}

// 构建umd包。可以扩展
async function rollupTask() {

  const commonInputOption = {
    input: 'lib/index.js',
    plugins: [
      // rBabel({ ...babelConfig, exclude: 'node_modules/**', }),
      // rUglify(),
    ]
  };

  const all = [
    [commonInputOption, { file: 'dist/jsaber.umd.js', format: 'umd', name: 'jsaber', exports: 'named' }],
    [commonInputOption, { file: 'dist/jsaber.esm.js', format: 'esm' }]
  ].map(async ([iOption, oOption]) => {
    const bundle = await rollup.rollup(iOption);
    return await bundle.write(oOption);
  });

  return Promise.all(all);
}

// 压缩打包后的js
function babelAndTerserTask() {
  src(['lib/*.js'])
    .pipe(clean({ force: true }))
    .pipe(babel(babelConfig))
    .pipe(terser())
    .pipe(dest('lib/'));

  src(['dist/*.umd.js'])
    .pipe(clean({ force: true }))
    .pipe(babel(babelConfig))
    .pipe(terser())
    .pipe(dest('dist/'));

  return src(['dist/*.esm.js'])
    .pipe(clean({ force: true }))
    .pipe(terser())
    .pipe(dest('dist/'));

}

exports.babelAndTerserTask = babelAndTerserTask;


exports.default = series([cleanTask, buildTsTask, rollupTask, babelAndTerserTask])
