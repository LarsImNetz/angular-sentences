/*global angular*/

"use strict";

angular.module("sentencesApp.sentencesModule")

    .controller("sentencesController", [
        "$scope",
        "requestService",
        "TextRequest",
        function ($scope, requestService, TextRequest) {
            $scope.active = false;

            var showThrobber = function () {
                $scope.active = true;
            };

            var hideThrobber = function () {
                $scope.active = false;
            };

            $scope.textRequest = new TextRequest();

            $scope.result = "";
            $scope.error = null;
            hideThrobber();

            var errorHandler = function (error) {
                $scope.error = error;
                hideThrobber();
            };

            function prepareAngebotRequest() {
                $scope.textRequest.immobilie.kaufPreis = $scope.sentenceMethod;
                $scope.textRequest.finanzierung.darlehensbetrag = $scope.sentence;
                $scope.textRequest.finanzierung.laufzeit = $scope.laufzeit;
            }

            $scope.submitAction = function () {
                showThrobber();
                $scope.error = null;
                prepareAngebotRequest();

                requestService.getAngebot($scope.textRequest)
                    .then(function (response) {
                        $scope.result = response.effektivZins;
                        hideThrobber();
                    }, errorHandler)
                    .catch(errorHandler);
            };
        }
    ]);
