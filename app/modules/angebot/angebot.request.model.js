/* global angular */

"use strict";

angular.module("bauzinsenrechnerApp.angebotModule")
	.factory("AngebotRequest", function () {

		function AngebotRequest() {
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

		AngebotRequest.prototype.getImmobilie = function () {
			return this.immobilie;
		};

		AngebotRequest.prototype.getFinanzierung = function () {
			return this.finanzierung;
		};

		return AngebotRequest;
	});
