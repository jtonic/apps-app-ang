/**
 * Created by jtonic on 01.05.2015.
 */
var gulp = require('gulp');
var util = require('gulp-util');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
    gulp.src('./views/index.html')
        .pipe(wiredep({}))
        .pipe(gulp.dest('./views'))
});

gulp.task('web', function (cb) {
    return nodemon({
        script: './bin/www'
    }).on('start', function(){
        cb();
    })
});

gulp.task('default', ['bower', 'web']);
