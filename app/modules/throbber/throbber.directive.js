/* global angular */

"use strict";

angular.module("bauzinsenrechnerApp.throbberModule")
	.directive("throbber", function () {
		return {
			scope: {
				active: "="
			},
			templateUrl: "modules/throbber/throbber.html",
			restrict: "E"
		};
	});
