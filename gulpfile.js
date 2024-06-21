const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
  return gulp.src('public/scss//style.scss') // Находит все SCSS файлы
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
  gulp.watch('public/scss//style.scss', gulp.series('sass')); // Следит за всеми SCSS файлами
});
gulp.task('watch', () => {
  gulp.watch('public/scss//*.scss', gulp.series('sass')); // Следит за всеми SCSS файлами
});
// gulp.watch(['public/scss//.scss', '!public/scss//_.scss'], gulp.series('sass'));
gulp.task('default', gulp.series('sass', 'watch'));
