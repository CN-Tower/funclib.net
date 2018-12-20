var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  runSequence = require('run-sequence'),
  rev = require('gulp-rev'),
  revCollector = require('gulp-rev-collector'),
  clean = require('gulp-clean');

/**
 * 任务入口
 * ===================================================
 */
// npm start
gulp.task('dev', ['openSrc', 'watch']);

// npm run build
gulp.task('build', function (done) {
  runSequence(
    'clean', 'revCss', 'revHtmlCss', 'revJs', 'revHtmlJs',
    'revImg', 'revHtmlImg', 'copyLib', 'openDist', done
  );
});

/**
 * browser-sync相关任务
 * ===================================================
 */
gulp.task('openSrc', function () {
  browserSync.init({ server: './src', port: 8081 });
});

gulp.task('openDist', function () {
  browserSync.init({ server: './dist', port: 8082 });
});

gulp.task('watch', function () {
  gulp.watch('./src/**/**', function () {
    browserSync.reload();
  });
});

/**
 * rev相关任务
 * ===================================================
 */
gulp.task('clean', function () {
  return gulp.src('./dist')
    .pipe(clean());
});

gulp.task('revCss', function () {
  return gulp.src(['./src/**/*.css', '!./src/lib/**/*.css'])
    .pipe(rev())                                //给文件添加hash编码
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())                       //生成rev-mainfest.json文件作为记录
    .pipe(gulp.dest('./rev/css'));
});

gulp.task('revHtmlCss', function () {
  return gulp.src([
    './rev/css/*.json',
    './src/**/*.html', '!./src/lib/**/*.html'
  ]).pipe(revCollector())                         //替换html中对应的记录
    .pipe(gulp.dest('./dist'));                   //输出到该文件夹中
});

gulp.task('revJs', function () {
  return gulp.src(['./src/**/*.js', '!./src/lib/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./rev/js'));
});

gulp.task('revHtmlJs', function () {
  return gulp.src([
    './rev/js/*.json',
    './dist/**/*.html', '!./dist/lib/**/*.html'
  ]).pipe(revCollector())
    .pipe(gulp.dest('./dist'));
});

gulp.task('revImg', function () {
  return gulp.src([
    './src/**/*.jpg', '!./src/lib/**/*.jpg',
    './src/**/*.jpeg', '!./src/lib/**/*.jpeg',
    './src/**/*.png', '!./src/lib/**/*.png',
    './src/**/*.gif', '!./src/lib/**/*.gif',
    './src/**/*.ico', '!./src/lib/**/*.ico',
  ]).pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./rev/img'));
});

gulp.task('revHtmlImg', function () {
  return gulp.src([
    './rev/img/*.json',
    './dist/**/*.css', '!./dist/lib/**/*.css',
    './dist/**/*.html', '!./dist/lib/**/*.html'
  ]).pipe(revCollector())
    .pipe(gulp.dest('./dist'));
});

gulp.task('copyLib', function () {
  gulp.src(['./src/lib/**/**'])
    .pipe(gulp.dest('./dist/lib'));
});