const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const del = require('del');

// Sass 컴파일 태스크
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed', sourceMaps: true }))
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
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(browserSync.stream());
});

// JS 복사 태스크
gulp.task('js', function () {
  return gulp.src('src/assets/js/**/*')
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(browserSync.stream());
});

// HTML 복사 태스크
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Clean 태스크: 'dist' 디렉토리 비우기
gulp.task('clean', function () {
  return del(['dist']);
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
  gulp.watch('src/**/*', gulp.series('html'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

// 기본 태스크 설정
gulp.task('default', gulp.series('clean', 'sass', 'jquery', 'images', 'js', 'html', 'browser-sync'));
