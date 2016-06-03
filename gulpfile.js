var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    cleanCss = require('gulp-clean-css');

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

// Minify CSS
gulp.task('clean_css', function(){
  return gulp.src('css/main.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('build/'));
});

// Minify JS
gulp.task('scripts', function(){
  return gulp.src('js/main.js')
    .pipe(gulp.dest('build/'));
});

//  Watch
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['lint', 'sripts']);
  gulp.watch('sass/*.sass', ['sass', 'clean_css']);
});

//  Default
gulp.task('default', ['lint', 'sass', 'clean_css', 'scripts', 'watch']);
