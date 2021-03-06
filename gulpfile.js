'use strict';

// Plugin load
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var del         = require('del');
var pagespeed   = require('psi');

// Source path
var path = {
  html      : 'app/jade/*.jade',
  htmlWatch : 'app/jade/**',
  css       : 'app/sass/**/*.scss',
  cssLib    : 'app/sass/lib/*.css',
  js        : 'app/js/*.js',
  jsLib     : 'app/js/lib/*.js',
  img       : 'app/img/**',
  htmlDest  : 'build/',
  cssDest   : 'build/css',
  jsDest    : 'build/js',
  imgDest   : 'build/img'
};

// Jade compile
function html() {
  return gulp.src(path.html)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest(path.htmlDest))
    .pipe($.size({title: 'jade'}))
    .pipe(reload({stream: true}));
}

// Sass compile
function css() {
  return gulp.src(path.css)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sass())
  .pipe($.uncss({
    html: ['build/*.html', 'build/**/*.html'],
    ignore: [/^\.is-/, ]
  }))
  .pipe($.pleeease({
    autoprefixer: ['last 2 versions'],
    minifier: true,
    mqpacker: true
  }))
  .pipe($.size({title: 'sass'}))
  .pipe($.concat('common.css'))
  .pipe(gulp.dest(path.cssDest))
  .pipe(reload({stream: true}));
}

// CSS Plugin concat
function cssLib() {
  return gulp.src(path.cssLib)
  .pipe($.plumber())
  .pipe($.concat('lib.css'))
  .pipe(gulp.dest(path.cssDest))
  .pipe(reload({stream: true}))
  .pipe(reload({stream: true}));
}

// JavaScript optimaize
function js() {
  return gulp.src(path.js)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.concat('common.js'))
  .pipe($.uglify())
  .pipe($.size({title: 'js'}))
  .pipe(gulp.dest(path.jsDest))
  .pipe(reload({stream: true}));
}

// JavaScript plugin concat
function jsLib() {
  return gulp.src(path.jsLib)
  .pipe($.concat('lib.js'))
  .pipe($.uglify())
  .pipe(gulp.dest(path.jsDest))
  .pipe(reload({stream: true}));
}

// Image optimize
function img() {
  return gulp.src(path.img, { since: gulp.lastRun(img) })
  .pipe($.imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(path.imgDest))
  .pipe($.size({title: 'img'}))
  .pipe(reload({stream: true}));
}

// //  Copy files
// function copy() {
//   gulp.src([
//     'app/*',
//   ], {
//     dot: true
//   }).pipe(gulp.dest('dist'))
//     .pipe($.size({title: 'copy'}))
// }


// Build folder delete
function clean(cb) {
  return del('build', cb);
}

// Google page speed
function pageSpeed(cb)  {
  pagespeed('example.com', {
    strategy: 'mobile'
  }, cb);
}

// Local server
function bs(cb) {
  return browserSync.init(null, {
    server: {
      baseDir: 'build'
    },
    ghostMode: false,
    notify: false
  }, cb);
}

// Watch
gulp.task('watch', function(done) {
  gulp.watch(path.htmlWatch, gulp.series(html));
  gulp.watch(path.css, gulp.series(css));
  gulp.watch(path.cssLib, gulp.series(cssLib));
  gulp.watch(path.js, gulp.series(js));
  gulp.watch(path.jsLib, gulp.series(jsLib));
  gulp.watch(path.img, gulp.series(img));
  done();
});

// Default Build
gulp.task('build', gulp.series (
  clean,
  html,
  gulp.parallel(css, cssLib, js, jsLib, img /*copy*/),
  bs
));
gulp.task(pageSpeed);

// Default Build
gulp.task('default', gulp.series('build', 'watch'));
