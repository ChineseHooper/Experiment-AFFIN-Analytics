var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var htmlMin = require('gulp-htmlmin');

gulp.task('css', function() {
  gulp.src([
      './css/style.css',
      './css/main.css',
      './css/animateInitButton.css'
    ])
    .pipe(concat('app.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./css'))
});

gulp.task('scripts', function() {
  gulp.src([
      './js/animateInitButton.js',
      './js/init.js',
      './js/main.js',
      './js/tween.js',
      './js/ui.js',
      './js/spotify-web-api.js',
      './js/searchOnSpotify.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('html', function() {
  gulp.src([
      './index.html'
    ])
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['css', 'scripts', 'html']);