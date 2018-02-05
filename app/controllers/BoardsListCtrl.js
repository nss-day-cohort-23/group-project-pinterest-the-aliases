'use strict'; 

angular.module("Winterest").controller("BoardsListCtrl", function ($scope, ImgFactory, FilterFactory) {
    $scope.title = "Board List";
    $scope.search = FilterFactory;

    // DISPLAY BOARDS
    //call Image factory to get all boards, then set boards as a scope variable
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            ImgFactory.getAllBoards(firebase.auth().currentUser.uid)
            .then(boardsArr => {
                if(boardsArr.length > 0) {
                    console.log("boardsArr", boardsArr);
                    $scope.boards = boardsArr;
                } else {
                    $scope.message = "You have no boards";
                }
            })
            .catch(error => {
                console.log("error", error);
            });
        } else {
            console.log("You are not logged in")
        }
    });
        
        
// LOAD INDIVIDUAL BOARD WHEN YOU CLICK ON A BOARD
// grab board id
// load route to single board view when you click on a board

});
