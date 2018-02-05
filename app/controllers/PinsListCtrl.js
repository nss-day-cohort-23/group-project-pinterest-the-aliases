"use strict";

angular.module("Winterest").controller("PinsListCtrl", function ($scope, ImgFactory, $routeParams) {
    

    // gets all pins for the given board
    ImgFactory.getPinList($routeParams.boardId)
    .then((data) => {
        $scope.pins = data;
    });

    //checks for current board title and lists it in the partial
firebase.auth().onAuthStateChanged(function (user) {
    ImgFactory.getAllBoards(firebase.auth().currentUser.uid)
    .then((boards) => {
        boards.forEach(board => {
            if (board.id === $routeParams.boardId) {
                $scope.currentBoard = board.title;
            }

        });
    });
});

    $scope.setModal = function () {
        let modal = document.querySelector('.modal');
        modal.children[1].children[0].children[0].setAttribute("src", this.pin.url);
        modal.classList.toggle("is-active");
    };
    $scope.toggleModal = () => {
        document.querySelector('.modal').classList.toggle("is-active");
    };
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