/**
    * Created by jtonic on 01.05.2015.
    */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

/**
 * To inject bower dependencies - js and css files
 */
gulp.task('bower', function () {
    gulp.src('./views/index.html')
        .pipe(wiredep({}))
        .pipe(gulp.dest('./views'))
});

/**
 * To inject project dependencies - js and css files
 */
gulp.task('inject', function () {
    var src = gulp.src(['./public/javascripts/signin.js', './public/stylesheets/style.css']);
    var target = gulp.src('./views/index.html', {read: "false"});
    target.pipe(inject(src)).pipe(gulp.dest('./views'));
});

/**
 * To start the ExpressJS web server
 */
gulp.task('web', function (cb) {
    return nodemon({
        script: './bin/www'
    }).on('start', function(){
        cb();
    })
});

// $ gulp injectdep
gulp.task('injectdep', ['bower', 'inject']);

// default task - $ gulp
gulp.task('default', ['bower', 'web']);
