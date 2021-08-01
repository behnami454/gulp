const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('picture' , () => {
    gulp.src('img/*.jpg').pipe(imagemin()).pipe(gulp.dest('dist/img'));
})

gulp.task('minify-css', () => {
    gulp.src('css/*.css').pipe(uglify()).pipe(gulp.dest('dist/css'));
})
gulp.task('minify-js', () => {
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
})
gulp.task('concat', () => {
    gulp.src('js/*.js').pipe(concat('main.js')).pipe(gulp.dest('dist/js'));
})
gulp.task('minify-html', () => {
    gulp.src('index.html').pipe(uglify()).pipe(gulp.dest('dist/index.html'));
})
gulp.task('all', ['picture' , 'minify-css' , 'minify-js' , 'concat' , 'minify-html']);


