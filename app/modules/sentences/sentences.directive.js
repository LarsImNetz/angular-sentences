/* global angular */

"use strict";

angular.module("sentencesApp.sentencesModule")
    .directive("sentencesRechner", function () {
        return {
            scope: {
                /* tag attribute */
                laufzeit: "@laufzeit",
                sentence: "@sentence",
                sentenceMethod: "@sentenceMethod"
            },
            templateUrl: "modules/sentences/sentences.html",
            restrict: "E"
        };
    });
