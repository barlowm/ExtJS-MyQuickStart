"use strict";

const $ = require("../../config.js");

const PagesFnc = function() {
	console.log("------------------ Copying Pages ------------------");

	$.gulp.src($.config.src + "/*.html")
		.pipe($.gulp.dest($.config.dest));
};

const watchPagesFnc = function() {
	console.log("Watching for index.html change");
	const watcher = $.gulp.watch($.config.src + "/*.html", ["pages"]);
	watcher.on("change", function(event) {
		console.log(`File ${event.path} was ${event.type} running tasks...`);
	});
};

$.gulp.task(
	"pages",
	"Check and load any HTML pages into the build folder",
	[],
	PagesFnc
);

$.gulp.task(
	"watchPages",
	"Watches for changes in html pages and rebuilds",
	[],
	watchPagesFnc
);