var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  runSequence = require('run-sequence'),
  rev = require('gulp-rev'),
  revCollector = require('gulp-rev-collector'),
  clean = require('gulp-clean'),
  fn = require('funclib');

/**
 * 任务入口
 * ===================================================
 */
// npm start
gulp.task('dev', ['openSrc', 'watchSrc']);

// npm run check
gulp.task('check', ['openDist', 'watchDist']);

// npm run build
gulp.task('build', function (done) {
  runSequence( 'clean', 'revAssets', 'revReplace', 'copyLib', 'logInfo', done );
});

/**
 * browser-sync相关任务
 * ===================================================
 */
gulp.task('openSrc', function () {
  browserSync.init({ server: './src', port: 8081 });
});

gulp.task('watchSrc', function () {
  gulp.watch('./src/**', function () { browserSync.reload(); });
});

gulp.task('openDist', function () {
  browserSync.init({ server: './dist', port: 8082 });
});

gulp.task('watchDist', function () {
  gulp.watch('./dist/**', function () { browserSync.reload(); });
});

/**
 * rev相关任务
 * ===================================================
 */
gulp.task('clean', function () {
  return gulp.src('./dist').pipe(clean());
});

gulp.task('revAssets', function () {
  return gulp.src(['./src/assets/**', '!./src/assets/lib/**'])
    .pipe(rev())                 //给文件添加hash编码
    .pipe(gulp.dest('./dist/assets'))
    .pipe(rev.manifest())        //生成rev-mainfest.json文件作为记录
    .pipe(gulp.dest('./rev'));
});

gulp.task('revReplace', function () {
  return gulp.src([
    './rev/*.json',
    './dist/**/*.css',
    './dist/**/*.js',
    './dist/**/*.html',
    './src/index.html'
  ]).pipe(revCollector())        //替换css/js/html中对应的记录
    .pipe(gulp.dest('./dist'));  //输出到该文件夹中
});

gulp.task('copyLib', function () {
  gulp.src(['./src/assets/lib/**']).pipe(gulp.dest('./dist/assets/lib'));
});

gulp.task('logInfo', function() {
  fn.defer(() => fn.log('构建成功！', 'Gulp'));
});