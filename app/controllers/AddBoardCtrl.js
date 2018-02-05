'use strict'; 

angular.module("Winterest").controller("AddBoardCtrl", function ($scope, ImgFactory, $location) {
 $scope.title = "Add Board";
 $scope.inputOne = "Board Title";
 $scope.placeHolderOne = "Pictures of Nicholas Cage's Face";
 $scope.inputTwo = "Board Description";
 $scope.placeHolderTwo = "Stare at these when you need inspiration";
 $scope.buttonName = "Add Board";

  // Checks if user
  // grabs title and description from dom
  // grabs uid from firebase
  // assembles image object
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      $scope.item = {
        uid: firebase.auth().currentUser.uid,
        title: "",
        description: ""
      };
      
      // passes to firebase
      $scope.saveItem = () => {
        ImgFactory.post($scope.item, "boards")
        .then( (data) => {
          $location.url("/boards");
        });
      };
    }
  });
});