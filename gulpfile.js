
// Load requirements
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload'),
	argv = require('yargs').argv;

// Set directories
var styles = 'styles/scss/**/*.scss';

// Profiles
var profiles = {
	'development': {
		'sass': {
			'style': 'nested'
		}
	},
	'production': {
		'sass': {
			'style': 'compressed'
		}
	}
};
var settings = (argv.production === undefined) ? profiles.development : profiles.production;

// Task: Compile sass to css
gulp.task('styles', function() {
	return sass(styles, { style: settings.sass.style })
		.pipe(gulp.dest('styles/css'))
		.pipe(notify({
			title: 'Styles updated!',
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
	gulp.watch(styles, ['styles']);
});