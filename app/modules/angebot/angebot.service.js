/*global angular*/

"use strict";

angular.module("bauzinsenrechnerApp.angebotModule")
	.factory("angebotService", [
		"$http",
		"Constants",
		function ($http, Constants) {

			var restApiRootUrl = Constants.restApiRootUrl;

			var restApiUrls = {
				angebot: restApiRootUrl + "angebot",
				pdf: restApiRootUrl + "pdf"
			};

			function angebotError(message, response) {
				return {
					message: message,
					response: response
				};
			}

			function responseSuccess(response) {
				switch (response.status) {
					case 200:
						return response.data;

					default:
					case 204:
						throw angebotError("Mit Ihren Angaben kann leider kein Angebot ermittelt werden.", response);
				}
			}

			function responseError(response) {
				throw angebotError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", response);
			}

			var angebotServiceInstance = {

				getAngebot: function (angebotRequest) {
					return $http({
						method: "POST",
						url: restApiUrls.angebot,
						headers: {
							"Authorization": "66a517dc66403b664f4299f4f9d04fb3"
						},
						data: angebotRequest
					})
						.then(responseSuccess, responseError);
				},

				getPdf: function(angebotRequest) {
					return $http({
						method: "POST",
						url: restApiUrls.pdf,
						headers: {
							"Authorization": "66a517dc66403b664f4299f4f9d04fb3"
						},
						data: angebotRequest,
						responseType: "arraybuffer"
					})
						.then(responseSuccess, responseError);
				},

				getTilgungsplan: function () {

				}

			};

			return angebotServiceInstance;
		}
	]);
