'use strict'; 

angular.module("Winterest", ["ngRoute"])
    .constant("FBUrl", "https://the-aliases.firebaseio.com/")
     .config(($routeProvider) => {
        $routeProvider
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
            templateUrl: "partials/PinsList.html",
            controller: "PinsListCtrl"
        })
        .otherwise("/", {
            templateUrl: "partials/ImageList.html",
            controller: "ImgListCtrl"
        });
    });