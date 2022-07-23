const gulp = require('gulp');
const sass = require('gulp-sass'); // Sassをコンパイル
const plumber = require('gulp-plumber'); // エラーで処理停止を阻止
const notify = require('gulp-notify'); // エラーで処理停止を阻止
const sassGlob = require('gulp-sass-glob'); // 複数のimportを一つにまとめる
const gmmq = require("gulp-merge-media-queries"); // メディアクエリの順番整
const autoprefixer = require('gulp-autoprefixer'); // ベンダープレフィックスを自動生成
const rename = require("gulp-rename"); // ファイル名変更
const del = require('del'); // ファイル削除
const uglify = require("gulp-uglify"); // .jsファイルを圧縮
const cleanCSS = require("gulp-clean-css"); // .cssファイルを圧縮
const imagemin = require('gulp-imagemin'); // 画像圧縮
const mozjpeg = require('imagemin-mozjpeg'); // .jpgファイルを圧縮
const pngquant = require('imagemin-pngquant'); // .pngファイルを圧縮
const imageminGif = require('imagemin-gifsicle'); // .gifファイルを圧縮
const imageminSvg = require('imagemin-svgo'); // .svgファイルを圧縮

const all = '../**'
// Sass パス
const srcSass = './sass/**/**/*.scss';
const relaySass = './sass/style.scss';
const destCss = '../css';

// js パス
const srcJs = './js/*.js';
const destJs = '../js';

// img パス
const srcImg = './img/**';
const destImg = '../img';
const targetImg = '../img/**';

// CSSコンパイル
const compileCss = ()=> {
    
  return (
    gulp
    .src(relaySass)
    .pipe( plumber({errorHandler: notify.onError('Error: <%= error.message %>')}) )
    .pipe( sassGlob() )
    .pipe( sass({outputStyle: 'expanded'}) )
    .pipe( autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe( gmmq() )
    .pipe(cleanCSS())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe( gulp.dest(destCss) )
  );
};

// JavaScriptコンパイル
const compileJs = ()=> {

  return (
    gulp
    .src(srcJs)
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest(destJs))
  );
};

// 画像圧縮
const minImg = ()=> {

  return (
    gulp
    .src(srcImg)
    .pipe(imagemin([
      // png
      pngquant({
          quality: [0.6, 0.8]
      }),
      // jpg
      mozjpeg({
          quality: 65,
          progressive: true
      }),
      // gif
      imageminGif({
          interlaced: false,
          optimizationLevel: 3,
          colors: 180
      }),
      // svg
      imageminSvg()
    ]))
    .pipe(gulp.dest(destImg))
  );
};

// 画像削除
const delImg = ()=> {
    
  return (
    del(targetImg, {force: true})
  );
};

const watch = (done)=> {
  gulp.watch(srcSass, compileCss);
  gulp.watch(srcJs, compileJs);
  gulp.watch(srcImg ,gulp.series(delImg, minImg));
  done();
}

exports.default = gulp.parallel(
  watch, compileCss, compileJs, minImg, delImg
);