var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    nodemon = require('gulp-nodemon'),
    vinylSourceStream = require('vinyl-source-stream'),
    vinylBuffer = require('vinyl-buffer'),
    plugins = require('gulp-load-plugins')();

var src = {
	html: 'client/**/*.html',
  css: {
    all: ['client/pages/**/css/*.css', 'node_modules/*/*.min.css', 'node_modules/*/dist/*.css', 'node_modules/*/dist/css/*.css']
    // material: 'node_modules/angular-material/angular-material.min.css'
  },
	scripts: {
		all: ['client/app/*.js','client/app/*.*.js','client/pages/*/*.js', 'client/shared/components/*.*.*.js', 'client/shared/*.*.js'],
		app: 'client/app/app.js',
    server: 'server/server.js'
	}
};

var build = 'build/';
var out = {
	scripts: {
		file: 'app.min.js',
		folder: build + 'scripts/'
	},
  css: {
    folder: build + 'css/'
  }
}

gulp.task('html', function() {
	return gulp.src(src.html)
		.pipe(gulp.dest(build))
		.pipe(plugins.connect.reload());
});

gulp.task('css', function() {
  return gulp.src(src.css.all)
    .pipe(gulp.dest(out.css.folder))
    .pipe(plugins.connect.reload());
})

gulp.task('jshint', function() {
	return gulp.src(src.scripts.all)
		.pipe(plugins.jshint({
			esnext: true
		}))
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['jshint'], function() {

	var sources = browserify({
		entries: src.scripts.app,
		debug: true
	})
	.transform(babelify.configure({
		presets: ["es2015"]
	}));

	return sources.bundle()
		.pipe(vinylSourceStream(out.scripts.file))
		.pipe(vinylBuffer())
		.pipe(plugins.sourcemaps.init({
			loadMaps: true
		}))
    .pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write('./', {
			includeContent: true
		}))
		.pipe(gulp.dest(out.scripts.folder))
		.pipe(plugins.connect.reload());

});

gulp.task('server', ['build', 'watch'], function() {
  nodemon({
    script: src.scripts.server
  })
});

gulp.task('watch', function() {
	gulp.watch(src.html, ['html']);
	gulp.watch(src.scripts.all, ['scripts']);
  gulp.watch(src.css.all, ['css']);
})

gulp.task('build', ['scripts', 'html', 'css']);
gulp.task('default', ['server']);
