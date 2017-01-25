/* global angular */

"use strict";

angular.module("sentencesApp.formularModule", [
	"ngRoute",
	"sentencesApp.angebotModule"
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
