"use strict";

const srcJSLibs =
	[
		"./src/libs/*.js",
		"./src/libs/classic/theme-classic/theme-classic-debug.js",
		"./src/libs/classic/theme-aria/theme-aria-debug.js"
	];

		// "./src/js/app/view/*.js",
		// "./src/js/app/controller/*.js",

const srcJSFiles =
	[
		"./src/js/app/model/**/*.js",
		"./src/js/app/view/**/*.js",
		"./src/js/app/controller/**/*.js",
		"./src/js/Application.js",
	];

const srcImageLibs = [
		"./src/images/*.*"
	];
const autoprefixer = require("autoprefixer");
const babelify     = require("babelify");
const browserify   = require("browserify");
const hbsfy        = require("hbsfy");
const concat       = require("gulp-concat");
const connect      = require("gulp-connect");
const chai         = require("chai");
const debug        = require("gulp-debug");
const del          = require("del");
const fs           = require("fs-extra");
const changed      = require("gulp-changed");
const eslint       = require("gulp-eslint");
const gulp         = require("gulp-help")(require("gulp"));
const gulpsync     = require("gulp-sync")(gulp);
const globify	   = require("require-globify");
const less         = require("gulp-less");
const mocha        = require("gulp-mocha");
const notify       = require("gulp-notify");
const postcss      = require("gulp-postcss");
const sourcemaps   = require("gulp-sourcemaps");
const gutil        = require("gulp-util");
const combiner     = require("stream-combiner2");		// see -> https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md
const buffer       = require("vinyl-buffer");
const bump         = require("gulp-bump");
const jsonModify   = require("gulp-json-modify");
const source       = require("vinyl-source-stream");

const request      = require("supertest");
const mochawesome  = require("mochawesome");
chai.use(require("chai-json-schema-ajv"));
const expect = chai.expect;
const assert = chai.assert;

const src          = "./src";
const srcApp       = src + "/js/app.js";
const srcFile      = "app.js";

const nodeModules  = "./node_modules";
const dest         = "./build";
const outputName   = "index.js";

const config = {
	src: src,
	srcApp: srcApp,
	srcFile: srcFile,
	srcJSFiles: srcJSFiles,
	srcJSLibs: srcJSLibs,
	srcImageLibs: srcImageLibs,
	envPath: src + "/js",
	dest: dest
};

module.exports = {
	babelify: babelify,
	browserify: browserify,
	hbsfy: hbsfy,
	concat: concat,
	connect: connect,
	console: console,
	config : config,
	nodeModules: nodeModules,
	autoprefixer: autoprefixer,
	buffer: buffer,
	chai: chai,
	expect: expect,
	assert: assert,
	changed: changed,
	combiner: combiner,
	debug: debug,
	del: del,
	eslint: eslint,
	fs: fs,
	globify: globify,
	gulp: gulp,
	gutil: gutil,
	less: less,
	mocha: mocha,
	notify: notify,
	postcss: postcss,

	sourcemaps: sourcemaps,
	source: source,
	gulpsync: gulpsync,
	mochawesome: mochawesome,
	bump: bump,
	jsonModify: jsonModify
};
