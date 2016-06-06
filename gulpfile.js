var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    cssnano = require('gulp-cssnano');

//  TASKS

//  Lint
gulp.task('lint', function(){
  return gulp.src('js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Sass
gulp.task('sass', function(){
  return gulp.src('sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('build/'));
});

//  Minify CSS
gulp.task('cssnano', function(){
  return gulp.src('css/main.css')
    .pipe(cssnano())
    .pipe(gulp.dest('build/'));
});

//  Watch
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['lint']);
  gulp.watch('sass/*.sass', ['sass', 'cssnano']);
});

//  Default
gulp.task('default', ['lint', 'sass', 'cssnano', 'watch']);
