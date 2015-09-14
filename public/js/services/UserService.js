// public/js/services/UserService.js
angular.module('UserService', [])
    .factory('User' , ['$http', function($http) {

    return {
        // call to get all users
        get : function() {
            console.log("in get");
            return $http.get('/api/users');
        },
        
        findOne : function(user_id) {
            console.log("in get one");
            return $http.get('api/users/'+ user_id);
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(user) {
            console.log("in create");
            return $http.post('/api/users', user);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/users/' + id);
        },
        
        knowsPassword : function (username, password) {
            User.getAuthenticated(username, password, function(err, user, reason) {
                if (err) throw err;
        
                // login was successful if we have a user
                if (user) {
                    // handle login success
                    console.log('login success');
                    return;
                }
        
                // otherwise we can determine why we failed
                var reasons = User.failedLogin;
                switch (reason) {
                    case reasons.NOT_FOUND:
                    case reasons.PASSWORD_INCORRECT:
                        // note: these cases are usually treated the same - don't tell
                        // the user *why* the login failed, only that it did
                        break;
                    case reasons.MAX_ATTEMPTS:
                        // send email or otherwise notify user that account is
                        // temporarily locked
                        break;
                }
            });
        }
    }

}]);
