/* global module */

"use strict";

module.exports = function (config) {
    config.set({

        basePath: "../",

        files: [
            "app/bower_components/angular/angular.js",
            "app/bower_components/angular-route/angular-route.js",
            "app/bower_components/angular-mocks/angular-mocks.js",
            "app/modules/**/*.js",
            "tests/**/*.js"
        ],

        autoWatch: true,

        frameworks: [
            "jasmine",
            "angular-filesort"
        ],

        browsers: ["PhantomJS"],

        plugins: [
            "karma-chrome-launcher",
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-coverage",
            "karma-angular-filesort"
        ],

        angularFilesort: {
            whitelist: [
                "app/modules/**/*.js"
            ]
        },

        preprocessors: {
            "app/modules/**/*.js": "coverage"
        },

        reporters: [
            "progress",
            "coverage"
        ],

        coverageReporter: {
            type: "lcovonly",
            dir: "tests/coverage",
            subdir: "report"
        }

    });
};
