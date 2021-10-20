const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
gulp.task('default',function(done){
    /////找到文件
    gulp.src('./original/index.js')
    //////把ES6代码转成ES5代码
    .pipe(babel())
    /////压缩文件
    .pipe(uglify())
    /////另存压缩后文件
    .pipe(gulp.dest('js'));
    done()
});