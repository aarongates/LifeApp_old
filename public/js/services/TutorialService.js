// public/js/services/TutorialService.js
angular.module('TutorialService', []).factory('Tutorial', ['$http', function($http) {

    return {
        // call to get all tutorials
        get : function() {
            return $http.get('/api/tutorials');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(tutorialData) {
            return $http.post('/api/tutorials', tutorialData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/tutorials/' + id);
        }
    }       

}]);
