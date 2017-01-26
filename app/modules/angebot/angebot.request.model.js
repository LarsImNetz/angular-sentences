/* global angular */

"use strict";

angular.module("sentencesApp.requestModule")
	.factory("TextRequest", function () {

		function TextRequest() {
			this.immobilie = {
				kaufPreis: 352000,
				postleitzahl: null
			};

			this.finanzierung = {
				laufzeit: 5,
				tilgungssatz: 1,
				darlehensbetrag: 160000,
				monatlicheRate: null,
				auszahlungstermin: null,
				finanzierungszweck: "NEUBAU",
				darlehensart: "ANNUITAET"
			};
		}

		TextRequest.prototype.getImmobilie = function () {
			return this.immobilie;
		};

		TextRequest.prototype.getFinanzierung = function () {
			return this.finanzierung;
		};

		return TextRequest;
	});
