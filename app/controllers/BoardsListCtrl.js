'use strict'; 

angular
    .module("Winterest")
    .controller("BoardsListCtrl", function ($scope, ImgFactory, FilterFactory, $q, $http, FBUrl, $window) {

    $scope.title = "Board List";
    $scope.search = FilterFactory;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            ImgFactory.getAllBoards(firebase.auth().currentUser.uid)
            .then(boardsArr => {
                if(boardsArr.length > 0) {
                    $scope.boards = boardsArr;
                } else {
                    $scope.message = "You have no boards";
                }
            })
            .catch(error => {
                console.log("error", error);
            });
        }
    });

    $scope.localBoard = {
        title: "",
        description: ""
    };
    
    $scope.setModal = function(){
        let modal = document.querySelector('.modal');
        modal.children[1].children[0].children[2].children[1].setAttribute("value", this.board.title);
        modal.children[1].children[0].children[3].children[1].setAttribute("value", this.board.description);
        $scope.boardIdVariable = this.board.id;
        modal.classList.toggle("is-active");
    };
    
    $scope.toggleModal = () => {
        document.querySelector('.modal').classList.toggle("is-active");
    };
    
    $scope.updateBoard = (localBoard, boardId) => {
        return $q((resolve, reject) => {
            $http
            .patch(`${FBUrl}/boards/${boardId}.json`,
            JSON.stringify(localBoard)
        )
        .then( (data) => {
            resolve(data);
            $scope.toggleModal();
            ImgFactory.getAllBoards(firebase.auth().currentUser.uid)
            .then(boardsArr => {
                if(boardsArr.length > 0) {
                    $scope.boards = boardsArr;
                } else {
                    $scope.message = "You have no boards";
                }
            })
            .catch(error => {
                console.log("error", error);
            });
        })
        .catch(err => {
            reject(err);
        });
        });
    };

});
