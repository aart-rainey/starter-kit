"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    opn = require('opn'),
    wiredep = require('wiredep').stream;

// Connect to server
gulp.task('connect', function(){
  connect.server({
    root: 'app',
    livereload: true
  });
  //opn('http://localhost:8080/');
});

//html
gulp.task('html', function(){
  gulp.src('app/*.html')
      .pipe(connect.reload());
});

//js
gulp.task('js', function(){
  gulp.src('app/js/*.js')
      .pipe(connect.reload());
});

//css
gulp.task('css', function(){
  gulp.src('app/css/*.css')
      //.pipe(concatCss("bundle.css"))
      .pipe(minifyCSS({keepBreaks:true}))
      .pipe(connect.reload());
      //.pipe(gulp.dest('app/css'));
});

// bower
gulp.task('bower', function(){
  gulp.src('app/*.html')
      .pipe(wiredep({
        directory: 'app/bower_components'
      }))
      .pipe(gulp.dest('app'));
});

// watching
gulp.task('watch', function(){
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/css/*.css'], ['css']);
  gulp.watch(['app/js/*.js'], ['js']);
  gulp.watch(['bower.json'], ['bower']);
});



gulp.task('default', ['connect', 'watch']);