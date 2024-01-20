const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const $ = require('jquery');

// Sass 컴파일 태스크
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
});

// jQuery 복사 태스크
gulp.task('jquery', function () {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('dist/assets/js'));
});

// 이미지 복사 태스크
gulp.task('images', function () {
  return gulp.src('src/assets/images/**/*')
    .pipe(gulp.dest('dist/assets/images'));
});

// JS 복사 태스크
gulp.task('js', function () {
  return gulp.src('src/assets/js/**/*')
    .pipe(gulp.dest('dist/assets/js'));
});

// HTML 복사 태스크
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

// BrowserSync 초기화 및 서버 시작 태스크
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });

  gulp.watch('src/assets/scss/**/*', gulp.series('sass'));
  gulp.watch('src/assets/images/**/*', gulp.series('images'));
  gulp.watch('src/assets/js/**/*', gulp.series('js'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

// 기본 태스크 설정: 'sass', 'jquery', 'images', 'js', 'browser-sync' 순서로 실행
gulp.task('default', gulp.series('sass', 'jquery', 'images', 'js', 'html', 'browser-sync'));