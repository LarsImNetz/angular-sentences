/*global angular*/

"use strict";

angular.module("sentencesApp.sentencesModule")

    .controller("sentencesController", [
        "$scope",
        "$sce",
        "requestService",
        "TextRequest",
        function ($scope, $sce, requestService, TextRequest) {
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

            // füllen der Select/Optionen
            requestService.getManipulationMethods()
                .then(function (response) {
                    $scope.items = response;
                }, errorHandler)
                .catch(errorHandler);

            function getSentenceMethod() {
                if ($scope.sentenceMethod === undefined) {
                    return "";
                }
                return $scope.sentenceMethod.id;
            }
            function prepareTextRequest() {
                // TODO: wenn nichts gewählt, geht es noch nicht!
                $scope.textRequest.sentence.sentenceMethod = getSentenceMethod();
                $scope.textRequest.sentence.sentence = $scope.sentence;
                $scope.textRequest.sentence.laufzeit = $scope.laufzeit;
            }

            // button Feuer Frei
            $scope.submitAction = function () {
                showThrobber();
                $scope.error = null;
                prepareTextRequest();

                requestService.getAngebot($scope.textRequest)
                    .then(function (response) {
                        $scope.result = $sce.trustAsHtml(response.text);
                        hideThrobber();
                    }, errorHandler)
                    .catch(errorHandler);
            };
        }
    ]);
