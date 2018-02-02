'use strict'; 

  // Factory for getting term entered in search bar by user
angular.module("Winterest").factory("FilterFactory", function ($scope) {
    return {
      term: ""
    };
});
