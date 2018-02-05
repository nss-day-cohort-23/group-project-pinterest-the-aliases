'use strict';

angular.module("Winterest").controller("ImgListCtrl", function ($scope, ImgFactory, FilterFactory) {
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
        let modal = document.querySelector('.modal');
        modal.children[1].children[0].children[0].setAttribute("src", this.img.url);
        modal.classList.toggle("is-active");
    };
    $scope.toggleModal = () => {
        document.querySelector('.modal').classList.toggle("is-active");
    };

    // DISPLAY ALL IMAGES
    // call image factory and get all images, set image array to scope variable
    ImgFactory.getAllImages()
    .then(data => {
        $scope.images = shuffleArr(data);
    });

    // GET ALL OF THE USER'S BOARDS --> this will be in the modal
    // accepts a user id
    // passes it into ImageFactory.getAllBoards(uid)
    // prints board list into modal

    // PIN IMAGE
    // grabs image id and board id
    // assembles pin object
    // calls image factory to post pin

});
