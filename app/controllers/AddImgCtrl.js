'use strict'; 

angular.module("Winterest").controller("AddImgCtrl", function ($scope, ImgFactory, $location) {
  $scope.title = "Add Image";
  $scope.inputOne = "Image Title";
  $scope.placeHolderOne = "Nicholas Cage With Long Hair";
  $scope.inputTwo = "Tags";
  $scope.placeHolderTwo = "food, yummy, tide pods";
  $scope.buttonName = "Upload Image";

  // this function is attached to an ng-show on the add image page and tells the URL input to show itself
  $scope.addImagePage = () => {
    return true;
  };

  // grabs url and description from dom
  // assembles image object
  $scope.item = {
    url: "",
    description: "",
    title: ""
  };
  
  // passes to firebase
  $scope.saveItem = () => {
    console.log('New image to add', $scope.item);
    ImgFactory.post($scope.item, "images")
    .then( (data) => {
      $location.url("/images");
    });
  };

});
