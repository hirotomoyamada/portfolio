const gulp = require('gulp');
// Sassをコンパイル
const sass = require('gulp-sass');
// エラーで処理停止を阻止
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
// 複数のimportを一つにまとめる
const sassGlob = require('gulp-sass-glob');
// メディアクエリの順番生理
const gmmq = require("gulp-merge-media-queries");
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ()=> {

  return gulp.watch('./sass/**/**/*.scss', ()=> {
  
    return (
      gulp
      .src( './sass/style.scss' )
      .pipe( plumber({errorHandler: notify.onError('Error: <%= error.message %>')}) )
      .pipe( sassGlob() )
      .pipe( sass( { outputStyle:'expanded'}) )
      .pipe( autoprefixer({
        cascade: false,
        grid: true
      }))
      .pipe( gmmq() )
      .pipe( gulp.dest( './css' ) )
    );
  });
});