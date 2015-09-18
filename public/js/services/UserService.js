// public/js/services/UserService.js
angular.module('UserService', [])
    .factory('UserService' , ['$http', '$q',function($http, $q) {

    return {
        // call to get all users
        get : function() {
            console.log("in get");
            return $http.get('/api/users')
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response) {
                return $q.reject(response.data);
            });
        },
        
        findOne : function(user_id) {
            console.log("in get one");
            return $http.get('api/users/'+ user_id)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response) {
                return $q.reject(response.data);
            });
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(user) {
            console.log("in create");
            return $http.post('/api/users', user)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response) {
                return $q.reject(response.data);
            });
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/users/' + id)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response) {
                return $q.reject(response.data);
            });
        },
        
        //check if the password is valid
        //retuns 0 is good, 1 if bad, 2 if trying to be hacked, 3 is error
        knowsPassword : function (username, password) {
            console.log("in knowspassword");
            return $http.get('api/users/' + username + '/' + password)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function(response) {
                return $q.reject(response.data);
            });
        }
    };

}]);
