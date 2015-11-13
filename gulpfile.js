
// Load requirements
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'), // Gulp-Plugin: SASS (Ruby)
    uglify = require('gulp-uglify'), // Gulp-Plugin: Minify JS
    rename = require('gulp-rename'), // Gulp-Plugin: Rename
    notify = require('gulp-notify'), // Gulp-Plugin: Native notifications
    browserSync = require('browser-sync').create(), // Provides browsers with updated styles/scripts/html
    argv = require('yargs').argv; // Adds support for cli flags

// Set directories
var styles = 'styles/scss/**/**.scss'; // contains all scss stylesheets
var scripts = 'scripts/src/*.js'; // contains all scripts, excluding vendor/
var layouts = ['./**/*.php', './**/*.html']; // all php and html files

// Profiles
// Development is default. Use --production flag to build for production mode
var profiles = {
    'development': {
        'sass': {
            'style': 'nested' // sass option for nested output
        }
    },
    'production': {
        'sass': {
            'style': 'compressed' // sass option for compressed output
        }
    }
};
var settings = (argv.production === undefined) ? profiles.development : profiles.production; // check for --production flag

// Task: Compile sass to css
gulp.task('styles', function() {
    return sass(styles, { style: settings.sass.style }) // compile all sass files, using the profiles settings
        .pipe(gulp.dest('styles/css')) // output css
        .pipe(browserSync.stream()) // pipe result to browser-sync
        .pipe(notify({
            title: 'Styles updated!',
            message: function(file) {
                return file.relative; // provide filenames as notification message
            },
            icon: './apple-touch-icon-precomposed.png' // use website favicon as notification symbol
        }));
});

// Task: Minify javascript
gulp.task('scripts', function() {
    return gulp.src(scripts)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('scripts/'))
        .pipe(notify({
            title: 'Scripts updated!',
            message: function(file) {
                return file.relative; // provide filenames as notification message
            },
            icon: './apple-touch-icon-precomposed.png' // use website favicon as notification symbol
        }));
});

// Task: Watch for changes
gulp.task('watch', function() {
    browserSync.init({ // initialize browser-sync
        server: './' // browser-sync will provide a static server automatically, using the provided directory as the websites root directory
        // _alternatively_ (e.g. when using MAMP/XAMPP/Homestead/etc.):
        // proxy: 'localhost:8888/newwebpage' // development server url: e.g. localhost:8888/newwebpage
    });
    gulp.watch(styles, ['styles']); // watch for changes in styles/sass/
    gulp.watch('styles/css/base.css').on('change', browserSync.reload); // base.css is critical css, embedded in the head tag. Browser-sync reloads the page completely whenever this file changes
    gulp.watch(scripts, ['scripts']); // watch for changes in scripts/
    gulp.watch(layouts).on('change', browserSync.reload); // browser-sync reload the page completely, whenever layout files change
});