'use strict'; 

angular.module("Winterest").controller("NavCtrl", function ($scope, FilterFactory, AuthFactory, $window, $route, $location) {
    $scope.title = "Winterest";
    $scope.search = FilterFactory;
    
    // Check if user is logged in
    // return true if logged in
    // return false if not
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.$apply($scope.user = true);
        } else {
            $scope.$apply($scope.user = false);
        }
    });

    // LOGIN USER
    // call auth factory to log in user
    $scope.login = () => {
        AuthFactory.login()
        .then( () => {
            console.log("Yay, logged in");
        })
        .catch(err => {
            console.log("error", err);
        });
    };
    
    // LOGOUT USER
    // call auth factory to log out user
    $scope.gtfo = () => {
        AuthFactory.logout()
        .then( () => {
            console.log("You is gone");
            $window.location.href = "#!/images";
        });
    };

    $scope.goHome = () => {
        $window.location.href = "#!/images";
        $route.reload();
    };

});