/* global require, module */
/* eslint no-implicit-globals: "off" */

"use strict";

var gutil = require("gulp-util");
var uglify = require("gulp-uglify");

module.exports = {
    getJavaScriptFilename: function() {
        return "sentences.min.js";
    },
    sassCompressInQaAndProduction: function () {
        var env = gutil.env.env;
        var isCompressed = function(env) {
            return (env === "qa" || env === "production");
        };
        console.log("###### sass compression " + isCompressed(env) );
        return isCompressed(env)
            ? {outputStyle: "compressed"}
            : {};
    },
    uglifyInQaAndProduction: function () {
        var env = gutil.env.env;
        var isUglify = function(env) {
            return env === "qa" || env === "production";
        }
        console.log("###### JS uglify " + isUglify(env));
        return isUglify(env)
            ? uglify()
            : gutil.noop();
    }
};
