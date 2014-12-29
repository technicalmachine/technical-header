var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var dist_files = ['./lib/_components.technical-header.scss', './lib/technical-header.jade'];

gulp.task('watch', function() {
  gulp.watch(__dirname + '/lib/*.scss', ['scss']);
});

gulp.task('scss', function() {
  gulp.src(__dirname + '/lib/test.scss')
    .pipe(sass())
    .pipe(gulp.dest('./lib'));
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'server.js',
      ext: 'scss jade',
      ignore: [
        'dist/'
      ],
      stdout: true,
    })
    .on('readable', function() {
      this.stdout
        .pipe(process.stdout);
      this.stderr
        .pipe(process.stderr);
    });
});

gulp.task('dist', function() {
  gulp.src(dist_files)
    .pipe(gulp.dest('dist/'));
  gulp.src('./lib/bower.json')
    .pipe(gulp.dest('./'));

  // TODO: Automate bower register
});

gulp.task('dev', ['scss', 'nodemon', 'watch']);
gulp.task('default', ['dev']);
