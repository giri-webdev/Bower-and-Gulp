var gulp = require('gulp');
var clean = require('gulp-clean');

//Clean the lib directory
gulp.task("clean", function () {
    gulp.src('Lib/*', { read: false }).pipe(clean({ force: true }));
});

//Copy the minified scripts from the bower_components directory to the lib directory
gulp.task('copyScripts', function () {
    gulp.src(['bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('Lib/Js'));
});


//Running multiple tasks in series
gulp.task('copy', ['clean', 'copyScripts']);
