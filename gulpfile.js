'use strict'
const gulp = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

//FRONT FILES
//ADMIN STYLES 
gulp.task('front-scss', function(){
    return gulp.src('./src/front/scss/main.scss')
        .pipe(concat('main.css'))    
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
})
//compile css
gulp.task('front-css', function(){
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./css'));
})
//compile js
gulp.task('front-js', function(){
    return gulp.src(
        [
        'node_modules/babel-polyfill/dist/polyfill.js',
        './src/front/*.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('build.js'))    
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./js'));
})



gulp.task('watch', function(){
    gulp.watch('./src/front/scss/main.scss', gulp.series('front-scss')); 
    gulp.watch('./src/css/*.css', gulp.series('front-css')); 
    gulp.watch('./src/front/*.js', gulp.series('front-js'));
})

gulp.task('default', gulp.series('watch'));