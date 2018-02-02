'use strict'; 

angular.module("Winterest").controller("AddImgCtrl", function ($scope) {
  $scope.title = "Add Image";
  $scope.inputOne = "Image Title";
  $scope.placeHolderOne = "Nicholas Cage With Long Hair";
  $scope.inputTwo = "Image Description";
  $scope.placeHolderTwo = "Who is responsible for this?";
  $scope.buttonName = "Upload Image";

  // this function is attached to an ng-show on the add image page and tells the URL input to show itself
  $scope.addImagePage = () => {
    return true;
  };

 // grabs url and description from dom
 // assembles image object
 // passes to firebase
});
