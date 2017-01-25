/* global angular */

"use strict";

angular.module("bauzinsenrechnerApp.formularModule")

	.controller("FormularController", [
		"$scope",
		"angebotService",
		"AngebotRequest",
		function ($scope, angebotService, AngebotRequest) {
			$scope.lang = {
				title: "Willkommen beim Bauzinsenrechner von Dr. Klein!",
				calculate: "Berechnen",
				laufzeitTitle: "Laufzeit",
				monatlicheRateTitle: "monatliche Rate",
				darlehensbetragTitle: "Darlehensbetrag",
				objektwertTitle: "Objektwert",
				jahre: "Jahre",
				result: "Effektivzins"
			};

			$scope.angebotRequest = new AngebotRequest();

			$scope.result = "";
			$scope.error = null;
			$scope.isCalculating = false;

			$scope.calculate = function () {
				var errorHandler = function (error) {
					$scope.error = error;
					$scope.isCalculating = false;
				};

				$scope.isCalculating = true;
				$scope.error = null;
				angebotService.getAngebot($scope.angebotRequest)
					.then(function (result) {
						$scope.result = result.effektivZins;
						$scope.isCalculating = false;
					}, errorHandler)
					.catch(errorHandler);
			};
		}
	]);
