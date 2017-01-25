/* global require, module */
/* eslint no-implicit-globals: "off" */

"use strict";

var gulp = require("gulp");
var htmlreplace = require("gulp-html-replace");

module.exports = {
	replace: function (env) {
		switch (env) {
			case "qa":
				gulp.src("app/index.html")
					.pipe(htmlreplace({
						"js": [
							"//qa.relaunch.drklein.hypoport.local/vendor/jquery/dist/jquery.min.js",
							"//qa.relaunch.drklein.hypoport.local/vendor/bootstrap-sass/assets/javascripts/bootstrap.min.js"
						],
						"css": [
							"//qa.relaunch.drklein.hypoport.local/typo3conf/ext/hypo_custom/Resources/Public/Css/drklein.min.css",
							"//qa.relaunch.drklein.hypoport.local/typo3conf/ext/hypo_gridelements/Resources/Public/Css/drklein.min.css"
						]
					}))
					.pipe(gulp.dest("dist/"));
				break;
			case "production":
				break;
			default:
			case "local":
				gulp.src("app/index.html")
					.pipe(htmlreplace({
						"js": [
							"//dev.relaunch.drklein.hypoport.local/vendor/jquery/dist/jquery.min.js",
							"//dev.relaunch.drklein.hypoport.local/vendor/bootstrap-sass/assets/javascripts/bootstrap.min.js"
						],
						"css": [
							"//dev.relaunch.drklein.hypoport.local/typo3conf/ext/hypo_custom/Resources/Public/Css/drklein.min.css",
							"//dev.relaunch.drklein.hypoport.local/typo3conf/ext/hypo_gridelements/Resources/Public/Css/drklein.min.css"
						]
					}))
					.pipe(gulp.dest("dist/"));
				break;
		}
	}
};
