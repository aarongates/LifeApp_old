// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
    .controller('MainController',
                ['$scope', '$http', '$location', 'User',
                 function($scope, $http, $location, User) {

    $scope.tagline = 'This is a ';
    
    $scope.doThing = function(user) {
        var ans = User.knowsPassword(user.username,user.password);
        switch  (ans) {
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
    }

}]);