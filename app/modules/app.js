/* global angular */

"use strict";

// Declare app level module which depends on views, and components
angular.module("sentencesApp", [
    "ngRoute",
    "ngmodel.format",
    "sentencesApp.throbberModule",
    "sentencesApp.sentencesModule",
    "sentencesApp.constantsModule"
])
    .config([
        "$locationProvider",
        "$routeProvider",
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider.otherwise({
                redirectTo: "/formular"
            });
        }
    ]);
