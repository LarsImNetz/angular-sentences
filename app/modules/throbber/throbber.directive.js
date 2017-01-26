/* global angular */

"use strict";

angular.module("sentencesApp.throbberModule")
    .directive("throbber", function () {
        return {
            scope: {
                active: "="
            },
            templateUrl: "modules/throbber/throbber.html",
            restrict: "E"
        };
    });
