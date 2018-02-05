'use strict'; 

angular.module("Winterest").controller("NavCtrl", function ($scope, FilterFactory, AuthFactory) {
    $scope.title = "Winterest";
    $scope.search = FilterFactory;


    $scope.login = () => {
        AuthFactory.login()
        .then( () => {
            console.log("Yay, logged in");
        })
        .catch(err => {
            console.log("error", err);
        });
    };
    // LOGIN USER
    // call auth factory to log in user

    // LOGOUT USER
    // call auth factory to log out user

    // Nav Items
    // array of nav item objects


    // Check if user is logged in
    // return true if logged in
    // return false if not

});