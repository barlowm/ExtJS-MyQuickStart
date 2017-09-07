"use strict";

const $ = require("../../config.js");
const sImageFiles = $.config.srcImageLibs;
const dImageFiles = $.config.dest + "/images";

const ImageFnc = function() {
	console.log("------------------ Building Images ------------------");
	console.log(`Copying any images from the ${sImageFiles} folder to the ${dImageFiles} folder`);
	let combined = $.combiner.obj([
		$.gulp.src(sImageFiles)
		.pipe($.gulp.dest(dImageFiles))
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

$.gulp.task(
	"images",
	`Copies and minimizes any images from the ${sImageFiles} folder to the ${dImageFiles} folder`,
	[],
	ImageFnc
);
