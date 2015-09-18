// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController',
                ['$scope', '$http', '$location', 'UserService',
                 function($scope, $http, $location, UserService) {

    $scope.tagline = 'This is a ';
    
    $scope.doThing = function(user) {
        UserService.knowsPassword(user.username,user.password)
        .then(function(response) {
            console.log("code: " + response.code);
            switch  (response.code) {
            case 0:
                $location.path('/home');
                break;
            case 1:
                //$location.path('/welcome');
            case 2:
                $location.path('/welcome');
                break;
            default:
                $location.path('./error');
                break;  
            }    
        }, function(error) {
            console.log(error);
            $location.path('/error');
        });
        
    };

}]);