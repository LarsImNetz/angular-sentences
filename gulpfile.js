/* global require, __dirname */
/* eslint no-implicit-globals: "off" */
/* eslint no-path-concat: "off" */

"use strict";

var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var eslint = require("gulp-eslint");
var TestServer = require("karma").Server;
var sass = require("gulp-sass");
var gutil = require("gulp-util");
var browserSync = require("browser-sync").create();
var utils = require("./gulp/utils");
var sonar = require("./gulp/sonar");

var env = gutil.env.env || "local";

console.log("");
console.log("###### Unser aktuelles Environment: " + env);

var files = {
    markup: [
        "app/modules/**/*.html",
        "app/index.html"
    ],

    sass: ["app/modules/**/*.scss"],

    javascript: [
        "app/modules/configuration/configuration.module.js",
        "app/modules/configuration/configuration.constants." + env + ".js",

        "app/modules/angebot/request.module.js",
        "app/modules/angebot/angebot.request.model.js",
        "app/modules/angebot/request.service.js",

        "app/modules/throbber/throbber.module.js",
        "app/modules/throbber/throbber.controller.js",
        "app/modules/throbber/throbber.directive.js",

        "app/modules/sentences/sentences.module.js",
        "app/modules/sentences/sentences.controller.js",
        "app/modules/sentences/sentences.directive.js",
        "app/modules/app.js"
    ]
};

gulp.task("js", function () {
    return gulp.src(files.javascript, {base: "app"})
        .pipe(concat(utils.getJavaScriptFilename()))
        .pipe(utils.uglifyInQaAndProduction())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("html", function () {
    return gulp.src(files.markup, {base: "app"})
        .pipe(gulp.dest("dist"));
});

gulp.task("js-watch", ["js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("html-watch", ["html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("sass-watch", ["sass"], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JavaScript and HTML files
gulp.task("serve", ["js", "html", "sass"], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch(files.javascript, ["js-watch"]);
    gulp.watch("tests/modules/**/*.js", ["js-watch"]);
    gulp.watch(files.markup, ["html-watch"]);
    gulp.watch(files.sass, ["sass-watch"]);
});

gulp.task("lint", function () {
    return gulp.src([
        "app/modules/**/*.js",
        "app/*.js",
        "tests/**/*.js",
        "gulpfile.js"
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("test", function (done) {
    new TestServer({
        configFile: __dirname + "/tests/karma.conf.js",
        singleRun: true,
        browsers: ["PhantomJS"]
    }, done).start();
});

gulp.task("test:watch", function (done) {
    new TestServer({
        configFile: __dirname + "/tests/karma.conf.js",
        singleRun: false,
        browsers: ["Chrome"]
    }, done).start();
});

gulp.task("clean", function () {
    return del([
        "dist",
        "tests/coverage"
    ]);
});

gulp.task("sass", function () {
    return gulp.src("app/modules/**/*.scss")
        .pipe(sass(utils.sassCompressInQaAndProduction())
            .on("error", sass.logError))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("copy", ["js", "html", "sass"], function () {
    gulp.src([
        "bower_components/angular/angular.min.js",
        "bower_components/angular/angular.min.js.map",
        "bower_components/angular-sanitize/angular-sanitize.min.js",
        "bower_components/angular-sanitize/angular-sanitize.min.js.map",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-route/angular-route.min.js.map",
        "bower_components/angular-i18n/angular-locale_de.js",
        "bower_components/angular-i18n/de.js",
        "bower_components/normalize-css/normalize.css",
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/bootstrap/dist/css/bootstrap-theme.min.css"
    ], {
        cwd: "app/**"
    })
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["clean"], function () {
    gulp.start("lint");
	// gulp.start("test");
    gulp.start("copy");
});

gulp.task("sonar", ["test"], sonar.task);
