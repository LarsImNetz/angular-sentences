/*global angular*/

"use strict";

angular.module("sentencesApp.sentencesModule")

    .controller("sentencesController", [
        "$scope",
        "angebotService",
        "AngebotRequest",
        function ($scope, angebotService, AngebotRequest) {
            $scope.active = false;

            var showThrobber = function () {
                $scope.active = true;
            };

            var hideThrobber = function () {
                $scope.active = false;
            };

            $scope.angebotRequest = new AngebotRequest();

            $scope.result = "";
            $scope.error = null;
            hideThrobber();

            var errorHandler = function (error) {
                $scope.error = error;
                hideThrobber();
            };

            function prepareAngebotRequest() {
                $scope.angebotRequest.immobilie.kaufPreis = $scope.sentenceMethod;
                $scope.angebotRequest.finanzierung.darlehensbetrag = $scope.sentence;
                $scope.angebotRequest.finanzierung.laufzeit = $scope.laufzeit;
            }

            $scope.submitAction = function () {
                showThrobber();
                $scope.error = null;
                prepareAngebotRequest();

                angebotService.getAngebot($scope.angebotRequest)
                    .then(function (response) {
                        $scope.result = response.effektivZins;
                        hideThrobber();
                    }, errorHandler)
                    .catch(errorHandler);
            };
        }
    ]);
