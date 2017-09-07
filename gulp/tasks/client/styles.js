"use strict";

const $ = require("../../config.js");

const sStyles      = $.config.src + "/styles/app.less";
const dStylesFiles = $.config.dest;
const sStylesSettings = {
	paths: [
		sStyles + "/",
		$.nodeModules + "/"
	]
};

const stylesFnc = function() {
	console.log("------------------ Compiling Stylesheets ------------------");
	let combined = $.combiner.obj([
		$.gulp.src(sStyles)
		.pipe($.debug({title: "Style Sheets:", minimal: false}))
		.pipe($.sourcemaps.init({ loadMaps: true }))
		.pipe($.less(sStylesSettings))
		.pipe($.postcss([$.autoprefixer()]))
		.pipe($.sourcemaps.write("./"))
		.pipe($.gulp.dest($.config.dest))
		.pipe($.connect.reload())
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};


const watchStylesFnc = function() {
	console.log("Watching for stylesheets change");
	const watcher = $.gulp.watch([sStyles], ["styles"]);
	watcher.on("change", function(event) {
		console.log(`File ${event.path} was ${event.type} running tasks...`);
	});
};


$.gulp.task(
	"styles",
	`Compiles all the LESS stylesheets from the ${sStyles} folder into a single CSS stylesheet in the ${dStylesFiles} folder`,
	[],
	stylesFnc
);

$.gulp.task(
	"watchStyles",
	"Watches for changes in stylesheets and rebuilds",
	[],
	watchStylesFnc
);
