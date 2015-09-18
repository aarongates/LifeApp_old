// public/js/controllers/RegisterCtrl.js
angular.module('RegisterCtrl', [])
    .controller('RegisterController',
                ['$scope', '$http', '$location', 'UserService',
                 function($scope, $http, $location, UserService) {
    
    $scope.signUp = function(user) {
        console.log("in sign up");
        console.log(user);
        UserService.create(user)
        .then(function(response) {
            console.log('User created');
            $location.path('/home');
        }, function(error) {
            console.log(error);
            $location.path('/error');
        });
    }

}]);