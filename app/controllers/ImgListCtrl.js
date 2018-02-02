'use strict'; 

angular.module("Winterest").controller("ImgListCtrl", function ($scope, ImgFactory) {
    $scope.title = "Image List";
    //shuffle array to display random images
    const shuffleArr = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
