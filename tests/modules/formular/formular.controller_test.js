/* global describe, beforeEach, module, inject, it, expect */

"use strict";

describe("bauzinsenrechnerApp.formularModule", function () {

	beforeEach(function() {
		module("bauzinsenrechnerApp.formularModule", function($provide) {
			$provide.constant("Constants", {
				restApiRootUrl: "dummy"
			});
		});
	});

	var scope = null;
	var angebotService = null;

	beforeEach(inject(function (_angebotService_) {
		angebotService = _angebotService_;
	}));

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller("FormularController", {
			$scope: scope
		});
	}));

	it("should be that scope values are initialised", function () {
		expect(angebotService).toBeDefined();
		expect(scope.lang).toBeDefined();
		expect(scope.lang.calculate).toEqual("Berechnen");
		expect(scope.lang.monatlicheRateTitle).toEqual("monatliche Rate");
		expect(scope.lang.darlehensbetragTitle).toEqual("Darlehensbetrag");
		expect(scope.lang.objektwertTitle).toEqual("Objektwert");
		expect(scope.lang.jahre).toEqual("Jahre");
		expect(scope.lang.result).toEqual("Effektivzins");

		expect(scope.angebotRequest).toBeDefined();
		expect(scope.result).toEqual("");
		expect(scope.error).toEqual(null);
		expect(scope.isCalculating).toEqual(false);

		expect(scope.calculate).toBeDefined();
	});

});
