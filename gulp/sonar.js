/* global require, module */
/* eslint no-implicit-globals: "off" */

"use strict";

var gulp = require("gulp");
var sonar = require("gulp-sonar");

module.exports = {
    task: function () {
        var options = {
            sonar: {
                host: {
                    url: "http://sonar.pkit.hypoport.local:9000"
                },
                projectKey: "de.vergleich.bauzinsenrechner:bauzinsenrechner",
                projectName: "bauzinsenrechner",
                projectVersion: "1.0.0",
                sources: "app/modules",
                language: "js",
                sourceEncoding: "UTF-8",
                javascript: {
                    lcov: {
                        reportPath: "tests/coverage/report/lcov.info"
                    }
                },
                exec: {
                    // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback )
                    // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail).
                    maxBuffer: 1024 * 1024
                }
            }
        };

        // gulp source doesn't matter, all files are referenced in options object above
        return gulp.src("thisFileDoesNotExist.js", {
            read: false
        })
            .pipe(sonar(options));
    }
};
