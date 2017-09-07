"use strict";

const $ = require("../config.js");

const cleanTask = function (done) {
	console.log("------------------ Cleaning ------------------");
	return $.del([$.config.dest + "/**"]);
};

$.gulp.task(
	"clean",
	"Cleans out the ${$.config.dest} folder",
	[],
	cleanTask
);
