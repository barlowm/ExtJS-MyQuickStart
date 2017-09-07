"use strict";

const $ = require("../../config.js");
const sLibFiles = [
	$.config.src + "/libs/ext-all-debug.js",
	$.config.src + "/libs/classic/theme-classic/*-debug.js",
	$.config.src + "/libs/classic/theme-aria/*-debug.js"
	// $.config.src + "/libs/**/theme-classic/**/*.css",
	// $.config.src + "/libs/**/theme-aria/**/*.css"
];
const dLibFiles = $.config.dest + "/libs";

const LibsFnc = function() {
	console.log("------------------ Copying Libs ------------------");
	console.log(`Copying Libs from the ${sLibFiles} folders to the ${dLibFiles} folder`);
	let combined = $.combiner.obj([
		$.gulp.src(sLibFiles)
		.pipe($.debug({title: "Sencha Libs:", minimal: false}))
		.pipe($.sourcemaps.init({ loadMaps: true }))
		.pipe($.concat("libs.js"))
		.pipe($.sourcemaps.write("./"))
		.pipe($.gulp.dest(dLibFiles))
		.pipe($.connect.reload())
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

$.gulp.task(
	"libs",
	`Copies any libs from the ${sLibFiles} folders to the ${dLibFiles} folder`,
	[],
	LibsFnc
);

