var gulp = require('gulp');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('js', function () {
  return gulp.src([
      '!js/all.js',
      'js/**/*.js' 
    ])
    .pipe(sourcemaps.init())
      .pipe(concat('js/all.js'))
      .pipe(stripDebug())
      .pipe(uglify(true))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js'], function () {
  gulp.watch('js/**/*.js', ['js']);
});
