/* global angular */

"use strict";

angular.module("bauzinsenrechnerApp.formularModule", [
	"ngRoute",
	"bauzinsenrechnerApp.angebotModule"
])
	.config([
		"$routeProvider",
		function ($routeProvider) {
			$routeProvider.when("/formular", {
				templateUrl: "modules/formular/formular.view.html",
				controller: "FormularController"
			});
		}
	]);
