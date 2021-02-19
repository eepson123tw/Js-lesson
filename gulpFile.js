const {
    src, //來源
    dest, //搬移
    series, //串聯任務
    parallel, //並行執行
    watch //監聽
} = require('gulp'); //es6語法 解構

const fileinclude = require('gulp-file-include');

const concat = require('gulp-concat');

const sass = require('gulp-sass');

const clean = require('gulp-clean');

const browserSync = require('browser-sync').create();


const reload = browserSync.reload;


watch('./app/page/*html', includeHtml);
exports.renew = series(cleanAll, parallel(htmlStyle, sassStyle, jsStyle, includeHtml));


function cleanAll() {

    return src('/dist', { read: false, allowEmpty: true })
        .pipe(clean());
}



function sassStyle() {

    return src('./app/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest("./dist/style"));

}

function jsStyle() {
    return src('./app/js/*.js')
        .pipe(dest("./dist/js"));

}


function htmlStyle() {
    return src('./app/*.html')
        .pipe(dest("./dist/"));
}

exports.watch = function watchAll() {

    watch('./app/style/*.scss', sassStyle);
    watch('./app/*.html', htmlStyle);
    watch('./app/js/*.js', jsStyle);
    watch('./app/page/*html', includeHtml);
}

function includeHtml() {
    return src(['./app/*.html']) //來源
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist')); //目的地
};