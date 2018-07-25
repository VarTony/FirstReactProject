const gulp = require('gulp');
const sass = require('gulp-sass');



console.log("work");

gulp.task('sass',  () => gulp.src('./public/scss/styles.scss').pipe(sass()).pipe(gulp.dest('./public/css')));