// public/js/controllers/RegisterCtrl.js
angular.module('RegisterCtrl', [])
    .controller('RegisterController',
                ['$scope', '$http', '$location', 'User',
                 function($scope, $http, $location, User) {
    
    $scope.signUp = function(user) {
        console.log("in sign up");
        console.log(user);
        User.create(user)
        .then(function(response) {
            alert(response.user);
            console.log('User created');
            $location.path('/home');
        }, function(error) {
            console.log(error);
            $location.path('/error');
        });
    }

}]);