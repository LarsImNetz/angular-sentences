/* global angular */

"use strict";

angular.module("bauzinsenrechnerApp.bauzinsenrechnerModule")
	.directive("bauzinsenRechner", function () {
		return {
			scope: {
				/* bauzinsen-rechner tag attributes */
				laufzeit: "@laufzeit",
				objektwert: "@objektwert",
				darlehensbetrag: "@darlehensbetrag"
			},
			templateUrl: "modules/bauzinsenrechner/bauzinsenrechner.html",
			restrict: "E"
		};
	});
