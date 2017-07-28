/* global angular */

"use strict";

angular.module("sentencesApp.configurationModule")
	.constant("configuration", {
		restApiRootUrl: "http://localhost:8008/sentences-rest-server/satz/"
	});
