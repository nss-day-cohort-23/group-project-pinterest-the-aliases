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
        .when("/new", {
            templateUrl: "partials/AddContent.html",
            controller: "AddImgCtrl"
        })
        .when("/boards/:boardId", {
            templateUrl: "partials/UserForm.html",
            controller: "BoardCtrl.js"
        })
        .otherwise("/", {
            templateUrl: "partials/ImageList.html",
            controller: "ImgListCtrl"
        });
    });