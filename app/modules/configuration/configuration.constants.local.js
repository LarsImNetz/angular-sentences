/* global angular */

"use strict";

angular.module("sentencesApp.configurationModule")
	.constant("configuration", {
		restApiRootUrl: "http://localhost:8080/sentences-rest-server/satz/"
	});
