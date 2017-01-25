/* global angular */

"use strict";

angular.module("sentencesApp.sentencesModule")
	.directive("sentencesRechner", function () {
		return {
			scope: {
				/* bauzinsen-rechner tag attributes */
				laufzeit: "@laufzeit",
				objektwert: "@objektwert",
				darlehensbetrag: "@darlehensbetrag"
			},
			templateUrl: "modules/sentences/sentences.html",
			restrict: "E"
		};
	});
