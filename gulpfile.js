/**
 * Created by jtonic on 01.05.2015.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

const dest = gulp.dest('./views');

/**
 * To inject bower dependencies - js and css files
 */
gulp.task('bower', function () {
    gulp.src('./views/*.html')
        .pipe(wiredep({
            bowerJson: require('./bower.json')
        }))
        .pipe(gulp.dest('./views'));
});

/**
 * To inject project dependencies - js and css files
 */
gulp.task('inject-index', function () {
    const signInSrc = gulp.src([
        './public/javascripts/signin.js',
        './public/stylesheets/style.css'
    ]);
    const signInTarget = gulp.src('./views/index.html', {read: "false"});
    signInTarget.pipe(inject(signInSrc)).pipe(dest);
});

gulp.task('inject-users', function () {
    const usersSrc = gulp.src([
        './public/javascripts/users.js'
    ]);
    const usersTarget = gulp.src('./views/users.html', {read: "false"});
    usersTarget.pipe(inject(usersSrc)).pipe(dest);
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

// $ gulp injects
gulp.task('injects', ['inject-index', 'inject-users']);

// $ gulp injectdep
gulp.task('injectdep', ['bower', 'injects']);

// default task - $ gulp
gulp.task('default', ['injectdep', 'web']);

