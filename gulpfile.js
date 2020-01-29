const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
    //where is my scss file
    return gulp.src('./scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./css')).pipe(browserSync.stream());
    //pass file throu sass comiler
    // where do i save compile css
    //syncing browser
}

function watch() {
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);

}
exports.style = style;
exports.watch = watch;