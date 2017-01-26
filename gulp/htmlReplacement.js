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
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ]/*,
                         "css": [
                         "bower_components/bootstrap/dist/css/bootstrap.min.css"
                         ]*/
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
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ]/*,
                         "css": [
                         "bower_components/bootstrap/dist/css/bootstrap.min.css"
                         ]*/
                    }))
                    .pipe(gulp.dest("dist/"));
                break;
        }
    }
};
