/* global angular */

"use strict";

angular.module("sentencesApp.configurationModule")
	.constant("configuration", {
		restApiRootUrl: "http://moonserver.homenet.org:8080/sentencesrestbeanserver/satz/"
	});
