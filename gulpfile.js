var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require("gulp-rename");  

gulp.task('default', function() {
  return gulp.src(['src/*.jsx'])
        .pipe(babel())
        .pipe(rename({
        extname: '.js'
        }))
        .pipe(gulp.dest('dest'));
});