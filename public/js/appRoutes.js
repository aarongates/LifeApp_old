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
        
        //the user registration page
        .when('/register', {
           templateUrl: 'views/register.html'//,
           //controller: 'RegisterController'
        })
        
        //any other urls redirect to home page
        .otherwise({ redirectTo: '/' });
        

    $locationProvider.html5Mode(true);

}]);
