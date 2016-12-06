// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');

gulp.task('reload', function () {
    // configure nodemon
    nodemon({
        script: 'index.js',
        ext: 'js'
    }).on('restart', function () {
        // // when the app has restarted, run connect.
        gulp.src('index.js')
            .pipe(connect.reload())
    })
});

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});
gulp.task('default', ['reload', 'connect']);
// Task
