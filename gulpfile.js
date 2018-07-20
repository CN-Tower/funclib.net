var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['browser-sync', 'watch']);

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: './',
        port: 8081
    });
});


gulp.task('watch', function() {
    gulp.watch('./*.js').on('change',reload);
    gulp.watch('./*.html').on('change',reload);
    gulp.watch('./*.css').on('change',reload);
});

