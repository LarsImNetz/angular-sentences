/*global angular*/

"use strict";

angular.module("sentencesApp.requestModule")
	.factory("requestService", [
		"$http",
		"Constants",
		function ($http, Constants) {

			var restApiRootUrl = Constants.restApiRootUrl;

			var restApiUrls = {
				angebot: restApiRootUrl + "manipulate",
				select: restApiRootUrl + "select"
			};

			function requestError(message, response) {
				return {
					message: message,
					response: response
				};
			}

			function responseSuccess(response) {
				if (response.status === 200) {
                    return response.data;
                }
				throw requestError("Mit Ihren Angaben kann leider kein Angebot ermittelt werden.", response);
			}

			function responseSelectSuccess(response) {
                if (response.status === 200) {
                    return response.data;
				}
				throw requestError("Selectabfrage fehlgeschlagen", response);
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

				getManipulationMethods: function () {
					return $http({
                        method: "GET",
                        url: restApiUrls.select
					}).then(responseSelectSuccess, responseError);
				},

				getTilgungsplan: function () {

				}
			};

			return requestServiceInstance;
		}
	]);
