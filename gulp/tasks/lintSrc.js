"use strict";
const $ = require("../config.js");

const lintSrc2Console = function() {
	return $.gulp.src([$.config.src + "/**/*.js", "./config/*.json"])
		.pipe($.eslint({config: ".eslintrc"}))
		.pipe($.eslint.format())
		.pipe($.eslint.failAfterError());
};

const lintSrc = function() {
	console.log("Checking Source Code for Lint");
	$.fs.ensureDirSync("reports");
	return $.gulp.src([$.config.src + "/js/**/*.js", "./config/*.json"])
		.pipe($.eslint({config: ".eslintrc"}))
		.pipe($.eslint.format("html", $.fs.createWriteStream("reports/LintReport_Src.html")))
		.pipe($.notify({ message: "LINT task complete, saving report in \"reports/LintReport_Src.html\".", onLast:true }));
};

$.gulp.task(
	"lintSrc",
	"runs ESLint on all the source modules",
	[],
	lintSrc
);
