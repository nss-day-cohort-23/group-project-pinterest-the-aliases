'use strict';

angular.module("Winterest").controller("FooterCtrl", function ($scope, FilterFactory, $window) {
    $scope.title = "Winterest";
    $scope.search = FilterFactory;

     $scope.top = () => {
        $window.scrollTo(0, 0);
    };
});