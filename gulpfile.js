/* global require, __dirname */
/* eslint no-implicit-globals: "off" */
/* eslint no-path-concat: "off" */

"use strict";

var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var eslint = require("gulp-eslint");
var Server = require("karma").Server;
var sass = require("gulp-sass");
var gutil = require("gulp-util");
var browserSync = require("browser-sync")
    .create();
var htmlReplacement = require("./gulp/htmlReplacement");
var utils = require("./gulp/utils");
var sonar = require("./gulp/sonar");
var constants = require("./gulp/constants");
var env = gutil.env.env || "local";
var jsSource = [
    "dist/temp/constants.js",

    "app/external-modules/formatter/ngmodel.format.js",

    "app/modules/angebot/angebot.module.js",
    "app/modules/angebot/angebot.request.model.js",
    "app/modules/angebot/angebot.service.js",

    "app/modules/formular/formular.module.js",
    "app/modules/formular/formular.controller.js",

    "app/modules/tilgungsplan/tilgungsplan.module.js",
    "app/modules/tilgungsplan/tilgungsplan.service.js",

    "app/modules/throbber/throbber.module.js",
    "app/modules/throbber/throbber.controller.js",
    "app/modules/throbber/throbber.directive.js",

    "app/modules/sentences/sentences.module.js",
    "app/modules/sentences/sentences.controller.js",
    "app/modules/sentences/sentences.directive.js",
    "app/modules/app.js"
];

gulp.task("constants", constants.task(env));

gulp.task("js", ["constants"], function () {
    return gulp.src(jsSource, {base: "app"})
        .pipe(concat(utils.getJavaScriptFilename()))
        .pipe(utils.uglifyInQaAndProduction())
        .pipe(gulp.dest("dist/js"))
        .on("end", function () {
            del(["dist/temp"]);
        });
});

gulp.task("html", function () {
    return gulp.src("app/modules/**/*.html", {base: "app"})
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
gulp.task("serve", ["js"], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("app/modules/**/*.js", ["js-watch"]);
    gulp.watch("app/external-modules/**/*.js", ["js-watch"]);
    gulp.watch("tests/modules/**/*.js", ["js-watch"]);
    gulp.watch("app/modules/**/*.html", ["html-watch"]);
    gulp.watch("index.html", ["html-watch"]);
    gulp.watch("app/modules/**/*.scss", ["sass-watch"]);
});

gulp.task("lint", function () {
    return gulp.src([
        "app/modules/**/*.js",
        "tests/**/*.js",
        "gulpfile.js"
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("test", function (done) {
    new Server({
        configFile: __dirname + "/tests/karma.conf.js",
        singleRun: true,
        browsers: ["PhantomJS"]
    }, done).start();
});

gulp.task("test:watch", function (done) {
    new Server({
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
        .pipe(sass({
            outputStyle: "compressed"
        })
            .on("error", sass.logError))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("copy", ["sass"], function () {
    gulp.src([
        "bower_components/angular/angular.min.js",
        "bower_components/angular/angular.min.js.map",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-route/angular-route.min.js.map",
        "bower_components/angular-i18n/angular-locale_de.js",
        "bower_components/angular-i18n/de.js",
        "bower_components/normalize-css/normalize.css",
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/bootstrap/dist/css/bootstrap-theme.min.css",
        "modules/**/*.html"
    ], {
        cwd: "app/**"
    })
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["clean"], function () {
    gulp.start("lint");
//	gulp.start("test");
    gulp.start("js");
    htmlReplacement.replace(env);
    gulp.start("copy");
});

gulp.task("sonar", ["test"], sonar.task);
