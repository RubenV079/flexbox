var gulp = require('gulp');
    sass = require('gulp-ruby-sass');
    watch = require('gulp-watch');

gulp.task('default', ['styles', 'watch'],function() {
});

gulp.task('styles', function() {
    return sass('sass//style.scss', { style: 'expanded' })
        .pipe(gulp.dest('dist/assets/css'))
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});