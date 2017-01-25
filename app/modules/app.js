/* global angular */

"use strict";

// Declare app level module which depends on views, and components
angular.module("bauzinsenrechnerApp", [
	"ngRoute",
	"ngmodel.format",
	"bauzinsenrechnerApp.throbberModule",
	"bauzinsenrechnerApp.bauzinsenrechnerModule",
	"bauzinsenrechnerApp.constantsModule"
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
