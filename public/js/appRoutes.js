// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/tutorial', {
            templateUrl: 'views/tutorial.html',
            controller: 'TutorialController'
        })
        
        /*
        .when('/register', {
           templateUrl: 'views/register.html',
           controller: 'RegisterController'
        })
        */
        
        .otherwise({ redirectTo: '/' });
        

    $locationProvider.html5Mode(true);

}]);
