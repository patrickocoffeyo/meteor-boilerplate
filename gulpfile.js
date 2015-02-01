/**
 * @file
 * Portable Gulp tool that checks a Meteor installation for js syntax errors.
 */
/* globals require */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

/**
 * @task lint
 *   Runs JSCS and JSLint on module, theme, and gulp files. Excludes all
 *   minified JavaScript files.
 */
gulp.task('cs', function () {
  return gulp.src([
    'src/**/*.js',
    'gulpfile.js'
    '!src/.meteor/**/*.js',
    '!src/packages/**/*.js',
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jscs());
});
