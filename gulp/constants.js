/* global require, module */
/* eslint no-implicit-globals: "off" */
/* eslint guard-for-in: "off" */

"use strict";

var gulp = require("gulp");
var config = require("./config");
var file = require("gulp-file");

module.exports = {
	task: function (env) {
		return function () {
			var constantsObjString = null;
			var codeString = null;
			var key = null;
			var value = null;

			constantsObjString = "{";

			for (key in config.constants[env]) {
				value = config.constants[env][key];
				if (typeof value === "string") {
					value = "\"" + value + "\"";
				}
				constantsObjString += "\n " + key + ": " + value + ",";
			}

			// Remove the last comma
			constantsObjString = constantsObjString.substring(0, constantsObjString.length - 1);
			constantsObjString += "\n}";

			codeString = "angular.module(\"bauzinsenrechnerApp.constantsModule\", []).constant(\"Constants\", " + constantsObjString + ");";

			return file("constants.js", codeString, {
				src: true
			})
				.pipe(gulp.dest("dist/temp"));
		};
	}
};
