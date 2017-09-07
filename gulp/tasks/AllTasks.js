"use strict";

const $ = require("../config.js");

$.gulp.task("build_withLint", ["bump", "pages", "styles", "fonts", "images", "scripts", "lint"]);
$.gulp.task("build_normal", ["bump", "pages", "styles", "fonts", "images", "scripts"]);
$.gulp.task("old_build", ["bump", "pages", "styles", "fonts", "images", "watchScripts"]);
$.gulp.task("build", ["bump", "pages", "styles", "fonts", "images", "watchScripts"]);

$.gulp.task(
	"sBuild",
	"Synchronous Build",
	$.gulpsync.sync(["clean", ["build"]])
);
