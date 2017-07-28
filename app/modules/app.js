/* global angular */

"use strict";

// Declare app level module which depends on views, and components
angular.module("sentencesApp", [
    "ngRoute",
    "sentencesApp.throbberModule",
    "sentencesApp.configurationModule",
    "sentencesApp.sentencesModule"
])
    .config([
        "$locationProvider",
        "$routeProvider",
        function ($locationProvider, $routeProvider) {
            $routeProvider.otherwise({
                redirectTo: "/"
            });
        }
    ]);
