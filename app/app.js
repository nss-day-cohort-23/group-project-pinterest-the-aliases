'use strict'; 

angular.module("Winterest", ["ngRoute"])
    .constant("FBUrl", "https://the-aliases.firebaseio.com/")
     .config(($routeProvider) => {
        $routeProvider
        .when("/login", {
            templateUrl: "partials/UserForm.html",
            controller: "LoginCtrl"
        })
        .when("/images", {
            templateUrl: "partials/ImageList.html",
            controller: "ImgListCtrl"
        })
        .when("/boards", {
            templateUrl: "partials/BoardsList.html",
            controller: "BoardsListCtrl"
        })
        .when("/newimage", {
            templateUrl: "partials/AddContent.html",
            controller: "AddImgCtrl"
        })
        .when("/newboard", {
            templateUrl: "partials/AddContent.html",
            controller: "AddBoardCtrl"
        })
        .when("/boards/:boardId", {
            templateUrl: "partials/UserForm.html",
            controller: "BoardCtrl"
        })
        .otherwise("/", {
            templateUrl: "partials/ImageList.html",
            controller: "ImgListCtrl"
        });
    });