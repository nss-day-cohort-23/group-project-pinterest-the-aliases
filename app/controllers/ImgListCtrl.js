'use strict';

angular.module("Winterest").controller("ImgListCtrl", function ($scope, ImgFactory, FilterFactory) {
    $scope.imgId = "";
    $scope.pin = {};
    $scope.title = "Image List";
    $scope.search = FilterFactory;
    
    //shuffle array to display random images
    const shuffleArr = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    $scope.setModal = function(){
        let modal = document.querySelector('.imgModal');
        modal.children[1].children[0].children[0].setAttribute("src", this.img.url);
        $scope.pin.imgId = this.img.id;
        modal.classList.toggle("is-active");
    };
    $scope.toggleModal = () => {
        document.querySelector('.imgModal').classList.toggle("is-active");
    };
    $scope.toggleBoardModal = () => {
        document.querySelector('.boardModal').classList.toggle("is-active");
    };

    // PIN IMAGE - grabs image id and board id
    // assembles pin object, calls image factory to post pin
    $scope.pinImg = function(){
        $scope.pin.boardId = this.board.id;
        ImgFactory.post($scope.pin,'pins');
    };

    // DISPLAY ALL IMAGES
    // call image factory and get all images, set image array to scope variable
    ImgFactory.getAllImages()
    .then(data => {
        $scope.images = shuffleArr(data);
    });

    // GET ALL OF THE USER'S BOARDS --> in the img modal
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            ImgFactory.getAllBoards(firebase.auth().currentUser.uid)
            .then(boardsArr => {
                if(boardsArr.length > 0) {
                    // console.log("boardsArr", boardsArr);
                    $scope.boards = boardsArr;
                } else {
                    $scope.message = "You need to add some boards!";
                }
            })
            .catch(error => {
                console.log("error", error);
            });
        } else {
            console.log("You are not logged in");
        }
    });

});
