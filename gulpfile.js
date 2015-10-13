
// Load requirements
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload');

// Task: Compile sass to css
gulp.task('styles', function() {
	return sass('styles/scss/*.scss', { style: 'expanded' })
		.pipe(gulp.dest('styles/css'))
		.pipe(notify({
			title: 'Styles aktualisiert',
			message: function(file) {
				return file.relative;
			},
			icon: './apple-touch-icon-precomposed.png'
		}))
		.pipe(livereload());
});

// Task: Watch for changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('styles/scss/*/**.scss', ['styles']);
});