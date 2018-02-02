"use strict";

angular.module("Winterest").controller("PinsListCtrl", function ($scope) {
    $scope.board = "TOTALLY RANDOM";

    $scope.pins = [
        {
            boardId: "001",
            url: "http://i.dailymail.co.uk/i/pix/2013/11/18/article-2509280-197B901300000578-210_634x504.jpg",
            title: "Captain K-9"
        },
        {
            boardId: "001",
            url: "https://www.bowwowsbest.com/v/vspfiles/photos/DOD-012250-2.jpg",
            title: "Sir WoofsALot"
        },
        {
            boardId: "001",
            url: "https://i.kinja-img.com/gawker-media/image/upload/s--2wKOFE_v--/c_scale,fl_progressive,q_80,w_800/iwpzjy3ggdpapoagr8av.jpg",
            title: "Nicholas Rage"
        },
        {
            boardId: "001",
            url: "http://static.tvgcdn.net/feed/1/904/thumbs/11893904_1300x1733.jpg",
            title: "Psych"
        },
        {
            boardId: "001",
            url: "http://img2.tvtome.com/i/u/0aa3afb3cbe3468fc6e43e50070b0810.png",
            title: "Friends"
        },
        {
            boardId: "001",
            url: "https://cdn.empireonline.com/jpg/80/0/0/1200/675/0/0/0/0/0/0/0/c/articles/59b858d7b43fedb81e7262aa/nicolas-cage.jpg",
            title: "Hey Girl"
        }
     ];

    // LOAD PINS
    // pass board id into firebase call
    // set pins on scope variable

    // EDIT BOARD
    // grabs edited data from edit modal
    // sends a WHOLE DAMN OBJECT back to firebase

    // DELETE BOARD
    // grabs board id
    // deletes from firebase

    //DELETE PIN
    // grabs firebase id
    // passes into delete function in image factory
});