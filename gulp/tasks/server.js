"use strict";

const $ = require("../config.js");

const launchFnc = function() {
	console.log(`Servering up ${$.config.dest}`);
	$.connect.server({
		root: $.config.dest,
		port: 8001,
		livereload: true
	});
};

const serverFnc = function() {
	console.log("---- Launching Local Server on port 8001 ----");
};

const watchFnc = function() {
	console.log("---- Watching for changes ----");
};

$.gulp.task(
	"watch",
	"Watches for changes in source and rebuilds and reloads the server",
	["watchStyles", "watchScripts", "watchPages"],
	watchFnc
);

$.gulp.task(
	"connect",
	"Launches a local webserver",
	[],
	launchFnc
);

$.gulp.task(
	"watchReload",
	"Watches for changes then rebuilds and reloads",
	$.gulpsync.sync(["sBuild", ["connect", "watch"]]),
	serverFnc
);