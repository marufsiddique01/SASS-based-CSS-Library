const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// build styles funtion to compile sass to css

function buildStyles(){
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'));
}

// scss watcher function that watches the modifications on the scss file and call build style function


function watchTask(){
    watch(['sass/**/*.scss'], buildStyles);
    // watch('index.scss', buildStyles);
}

exports.default = series(buildStyles, watchTask);
