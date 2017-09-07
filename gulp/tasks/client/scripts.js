"use strict";

const $ = require("../../config.js");

const srcFiles = $.config.srcJSLibs.concat($.config.srcJSFiles );
// const srcFiles = $.config.srcJSFiles;

const ScriptsFnc = function() {
	console.log("------------------ Compiling Scripts ------------------");
	console.log(srcFiles);

	let combined = $.combiner.obj([
		$.gulp.src(srcFiles)
		// .pipe($.debug({title: "File Stream:", minimal: false}))
		.pipe($.debug({title: "File Stream:"}))
		.pipe($.sourcemaps.init({ loadMaps: true }))
		.pipe($.concat("index.js"))
		.pipe($.sourcemaps.write("./"))
		.pipe($.gulp.dest($.config.dest))
		.pipe($.connect.reload())
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

const BrowserifyScriptsFnc = function() {
	console.log("------------------ Bundling Scripts ------------------");
	console.log(srcFiles);

	let bundler = $.browserify({
		entries: $.config.src + "/js/Application.js",
		debug: true,
		extensions: [".js", ".hbs"]
	});

	bundler
		.transform($.babelify, {
			presets: ["es2015", "stage-2"],
			plugins: ["transform-runtime", "transform-es2015-destructuring", "transform-object-rest-spread"]
		});

	function rebundle() {
		console.log("------------------ RE-Bundling Script Files ------------------");
		$.gutil.log("Bundle started...");
		return bundler
			.bundle()
			.on("error", (err) => $.gutil.log(err.message))
			.on("end", () => $.gutil.log("Bundle complete!"))
			.pipe($.debug({title: "Re-Bundiling Scripts:", minimal: false}))
			.pipe($.source("app.js"))
			.pipe($.buffer())
			.pipe($.sourcemaps.init({ loadMaps: true }))
			.pipe($.sourcemaps.write("./"))
			.pipe($.gulp.dest($.config.dest))
			.pipe($.connect.reload());
	}

	// if ($.args.watch) {
	// 	bundler.on("update", rebundle);
	// }
	rebundle();
};

const watchScriptsFnc = function() {
	console.log("Watching for scripts change");
	const watcher = $.gulp.watch(srcFiles, ["scripts"]);
	watcher.on("change", function(event) {
		console.log(`File ${event.path} was ${event.type} running tasks...`);
		// BrowserifyScriptsFnc();
		ScriptsFnc();
	});
};

$.gulp.task(
	"scripts",
	"Compiles all the JS Scripts into a single app.js file. Also builds a map file",
	[],
	ScriptsFnc
);


$.gulp.task(
	"watchScripts",
	"Watches for changes in scripts and rebuilds",
	["scripts"],
	watchScriptsFnc
);

$.gulp.task(
	"Browserify",
	"Builds scripts using Browserify",
	[],
	BrowserifyScriptsFnc
);


