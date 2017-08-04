/* global angular */

"use strict";

angular.module("sentencesApp.configurationModule")
	.constant("configuration", {
		restApiRootUrl: "http://moonserver.homeplex.org:8080/sentencesrestbeanserver/satz/"
	});
