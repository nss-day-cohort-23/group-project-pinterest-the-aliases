'use strict'; 

angular.module("Winterest").controller("BoardsListCtrl", function ($scope, ImgFactory) {
    $scope.title = "Board List";

// DISPLAY BOARDS
//call Image factory to get all boards, then set boards as a scope variable
    let uid = "4"; //dummy data uid
    ImgFactory.getAllBoards(uid)
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
    
    // //Dummy data
    // $scope.boards = [
    //     {
    //         id: "board1",
    //         title: "Dogs",
    //         description: "Dogs I think are cute"
    //     },
    //     {
    //         id: "board2",
    //         title: "Cats",
    //         description: "Cats I think are stupid"
    //     },
    //     {
    //         id: "board3",
    //         title: "Nicolas Cage",
    //         description: "Faces of Nicolas Cage"
    //     },
    //     {
    //         id: "board4",
    //         title: "NSS",
    //         description: "All the things at NSS"
    //     },
    //     {
    //         id: "board5",
    //         title: "Food",
    //         description: "Yummy food I like"
    //     },
    //     {
    //         id: "board6",
    //         title: "TV Shows",
    //         description: "My favorite bits"
    //     },
    //     {
    //         id: "board7",
    //         title: "hair",
    //         description: "Hairstyles to avoid"
    //     },
    //     {
    //         id: "board8",
    //         title: "funny",
    //         description: "Funny pics"
    //     },
    //     {
    //         id: "board9",
    //         title: "Losers",
    //         description: "Lame people"
    //     }
    // ];

// LOAD INDIVIDUAL BOARD WHEN YOU CLICK ON A BOARD
// grab board id
// load route to single board view when you click on a board

});
