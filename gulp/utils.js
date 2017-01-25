/* global require, module */
/* eslint no-implicit-globals: "off" */

"use strict";

var gutil = require("gulp-util");
var uglify = require("gulp-uglify");

module.exports = {
	getJavaScriptFilename: function () {
		return gutil.env.env === "local"
			? "bauzinsenrechner.js"
			: "bauzinsenrechner.min.js";
	},

	uglifyInQaAndProduction: function () {
		return gutil.env.env === "qa" || gutil.env.env === "production"
			? uglify()
			: gutil.noop();
	}
};
