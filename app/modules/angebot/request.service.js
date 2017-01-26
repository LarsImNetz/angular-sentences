/*global angular*/

"use strict";

angular.module("sentencesApp.requestModule")
	.factory("requestService", [
		"$http",
		"Constants",
		function ($http, Constants) {

			var restApiRootUrl = Constants.restApiRootUrl;

			var restApiUrls = {
				angebot: restApiRootUrl + "angebot"
			};

			function requestError(message, response) {
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
						throw requestError("Mit Ihren Angaben kann leider kein Angebot ermittelt werden.", response);
				}
			}

			function responseError(response) {
				throw requestError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.", response);
			}

			var requestServiceInstance = {

				getAngebot: function (textRequest) {
					return $http({
						method: "POST",
						url: restApiUrls.angebot,
						headers: {
							"Authorization": "66a517dc66403b664f4299f4f9d04fb3"
						},
						data: textRequest
					})
						.then(responseSuccess, responseError);
				},

				getTilgungsplan: function () {

				}

			};

			return requestServiceInstance;
		}
	]);
