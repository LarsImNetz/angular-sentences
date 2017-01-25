/* global describe, beforeEach, module, inject, it, expect */

"use strict";

describe("sentencesApp.angebotModule", function() {

	beforeEach(function() {
		module("sentencesApp.angebotModule", function($provide) {
			$provide.constant("Constants", {
				restApiRootUrl: "dummy"
			});
		});
	});

	var angebotService = null;

	beforeEach(inject(function(_angebotService_) {
		angebotService = _angebotService_;
	}));

	it("should exist", function () {
		expect(angebotService).toBeDefined();
	});

	it("should implement API methods", function() {
		expect(angebotService.getAngebot).toBeDefined();
		expect(angebotService.getTilgungsplan).toBeDefined();
	});

});
