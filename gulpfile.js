/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include kss
//=======================================================
var kss = require('kss');

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var concat      = require('gulp-concat');
var order       = require('gulp-order');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');

gulp.task('styleguide', function() {
  return kss({
    source: [
      './src/global',
      './src/components',
      './src/pages'
    ],
    destination: '.',
    builder: './builder',
    namespace: 'kss-pl-theme:./src/components/',
    css: [
      'https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet',
      'kss-assets/all.css'
    ],
    homepage: 'style-guide-homepage.md',
    title: 'KSS PL Theme',
    custom: ['Layout', 'Classes']
  });
});

gulp.task('compile', function() {
  return gulp.src('./src/{components,global,pages}/**/*.scss')
    .pipe(sass({ outputStyle: 'nested' })
      .on('error', sass.logError))
    .pipe(prefix({
      browsers: [
        'last 2 versions',
        'IE >= 10'
      ],
      cascade: false
    }))
    .pipe(rename(function (path) {
      path.dirname = '';
      return path;
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {
  return gulp.src([
    './css/*.css'
  ])
    .pipe(order([
      'css/global.css',
      'css/*.css'
    ], { base: './' }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./kss-assets'));
});

gulp.task('sass', function(callback) {
  runSequence(
    'compile',
    'concat',
    callback
  );
});
