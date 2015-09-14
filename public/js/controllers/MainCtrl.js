// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController',
                ['$scope', '$http', '$location', 'User',
                 function($scope, $http, $location, User) {

    $scope.tagline = 'This is a ';
    
    $scope.doThing = function(user) {
        console.log(user.username + " " + user.password);
    }

}]);