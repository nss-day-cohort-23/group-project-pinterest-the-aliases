'use strict'; 

angular.module("Winterest").controller("NavCtrl", function ($scope, FilterFactory, AuthFactory, $window) {
    $scope.title = "Winterest";
    $scope.search = FilterFactory;

    $scope.gtfo = () => {
        AuthFactory.logout()
        .then( () => {
            console.log("You is gone");
            $window.location.href = "#!/images";
        });
    };

    $scope.goHome = () => {
        $window.location.href = "#!/images";
    };


    $scope.login = () => {
        AuthFactory.login()
        .then( () => {
            console.log("Yay, logged in");
        })
        .catch(err => {
            console.log("error", err);
        });
    };


    // Nav Items
    // array of nav item objects


    // Check if user is logged in
    // return true if logged in
    // return false if not

});