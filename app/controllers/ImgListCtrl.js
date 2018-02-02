'use strict'; 

angular.module("Winterest").controller("ImgListCtrl", function ($scope) {
    $scope.title = "Image List";
    // DISPLAY ALL IMAGES
// call image factory and get all images, set image array to scope variable

// GET ALL OF THE USER'S BOARDS --> this will be in the modal
// accepts a user id
// passes it into ImageFactory.getAllBoards(uid)
// prints board list into modal

// PIN IMAGE
// grabs image id and board id
// assembles pin object
// calls image factory to post pin
});
