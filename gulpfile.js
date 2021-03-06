var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('pranie', function () {
    console.log('robię pranie');
});


gulp.task('hint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest('css'))
});

var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
})