"use strict";

angular.module("Winterest").controller("PinsListCtrl", function ($scope, ImgFactory, $routeParams) {
    $scope.board = "TOTALLY RANDOM";

    // gets all pins for the given board
    ImgFactory.getPinList($routeParams.boardId)
    .then((data) => {
        $scope.pins = data;
        console.log("this should be one image", $scope.pins);
    });

    // EDIT BOARD
    // grabs edited data from edit modal
    // sends a WHOLE DAMN OBJECT back to firebase

    // DELETE BOARD
    // grabs board id
    // deletes from firebase

    //DELETE PIN
    // grabs firebase id
    // passes into delete function in image factory
});