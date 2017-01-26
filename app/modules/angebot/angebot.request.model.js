/* global angular */

"use strict";

angular.module("sentencesApp.requestModule")
	.factory("TextRequest", function () {

		function TextRequest() {
			this.sentence = {
				laufzeit: 5,
				sentence: null,
				sentenceMethod: null,
				textConverter: "TEST"
			};
		}

		TextRequest.prototype.getSentence = function () {
			return this.sentence;
		};

		return TextRequest;
	});
