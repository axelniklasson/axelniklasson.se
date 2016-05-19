var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var bower = require('gulp-bower');
var filter = require('gulp-filter');
var server = require('gulp-server-livereload');
var ghPages = require('gulp-gh-pages');

/* Fetch all vendor files and concatenate to one file */
gulp.task('bower', function() {
    var cssFilter = filter(['**/*.css', '!**/*.min.css'], {restore: true});
    var jsFilter = filter(['**/Chart.js', '**/dist/**/*.js', '!**/*.min.js']);
    return bower()
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist'));
});

/* Lint all JS files with JSHint and concatenate them */
gulp.task('js', function() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist'));
});

/* Listen on changes in JS files and lint/concat them to one file */
gulp.task('js:watch', ['js'], function() {
    return gulp.watch('./src/scripts/**/*.js', ['js']);
});

/* Compile SCSS files to concatenated CSS file */
gulp.task('sass', function() {
    return gulp.src('./src/styles/**/*')
        .pipe(concat('styles.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

/* Listen on changes in SCSS-files and compile to CSS */
gulp.task('sass:watch', ['sass'], function () {
    return gulp.watch('./src/styles/**/*.scss', ['sass']);
});

/* Fetch all images */
gulp.task('img', function() {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist'));
});

/* Fetch php files */
gulp.task('php', function() {
    return gulp.src('./src/php/**/*')
        .pipe(gulp.dest('./dist'));
});

/* Fetch media files */
gulp.task('media', function() {
    return gulp.src('./src/media/**/*')
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['sass:watch', 'js:watch', 'img', 'php', 'media', 'bower'], function() {
    return gulp.src('./')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('build', ['js', 'sass', 'img', 'php', 'media', 'bower'], function() {
    gulp.src('./dist/**/*')
        .pipe(gulp.dest('./build/dist'));
    gulp.src('./index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});