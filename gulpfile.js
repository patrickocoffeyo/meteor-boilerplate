/**
 * @file
 * Portable Gulp tool that checks a Meteor installation for js syntax errors.
 */
/* globals require */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    jsonlint = require("gulp-jsonlint"),
    runSequence = require('run-sequence');

/**
 * @task JavaScript and JSON coding standards.
 *   Executes lint and style checkers on project JavaScript and JSON.
 */
gulp.task('cs', function (callback) {
  runSequence('lintjson', 'lintjs', callback);
});

/**
 * @task JSON lint.
 *   Checks JSON configuration files for errors.
 */
gulp.task('lintjson', function () {
  return gulp.src([
    '.jscsrc',
    '.jshintrc'
  ])
  .pipe(jsonlint())
  .pipe(jsonlint.reporter());
});

/**
 * @task JavaScript lint.
 *   Runs JSCS and JSLint on server, client, lib, and gulp files.
 */
gulp.task('lintjs', function () {
  return gulp.src([
    'gulpfile.js',
    'src/**/*.js',
    '!src/.meteor/**/*.js',
    '!src/packages/**/*.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jscs());
});

/**
 * @task JavaScript/JSON watch.
 *   Watches changes on relevant js and json files and reports accordingly.
 */
gulp.task('watch', function () {
  gulp.watch([
    'gulpfile.js',
    'src/**/*.js',
    '!src/.meteor/**/*.js',
    '!src/packages/**/*.js'
  ], ['lintjs']);

  gulp.watch([
    '.jscsrc',
    '.jshintrc'
  ], ['lintjson']);
});
