'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildSass() {
  return gulp.src('./sass/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./'));
}

function watchSass() {
  gulp.watch('./sass/*.sass', buildSass);
}

exports.sass = buildSass;
exports.watch = watchSass;
exports.default = watchSass;
