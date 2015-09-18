module.exports = function(app,router) {
    var User = require('../models/user');
    
    router.route('/users')
        .post(function(req,res) {
            var user = new User();
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.username = req.body.username;
            user.password = req.body.password;
            user.loginAttempts = 0;
            user.lockUntil = Date.now();
            
            user.save(function(err) {
                if (err) 
                    res.send(err);
                
                res.json({ message: 'User created!' });
            });
        })
    
        .get(function(req,res) {
            User.find(function(err,users) {
                if (err)
                    res.send(err);
                
                res.json(users);
            });
        });
    
    router.route('/users/:user_id')
    
       .get(function(req, res) {
            console.log("in route get");
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        })
        
        .put(function(req, res) {
            // use our bear model to find the bear we want
            User.findById(req.params.user_id, function(err, bear) {
                if (err)
                    res.send(err);
                user.name = req.body.name;  // update the bears info
                // save the bear
                user.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({ message: 'User updated!' });
                });
            });
        })
        
        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully deleted' });
            });
        });
    
    router.route('/users/:username/:password')
        
        .get(function(req,res) {
            User.getAuthenticated(req.params.username,
                              req.params.password,
                              function(err, user, reason) {
                if (err) throw err;
        
                console.log(req.params.username);
                console.log(req.params.password);
                
                // login was successful if we have a user
                if (user) {
                    // handle login success
                    console.log('login success');
                    res.json({code:0});
                } else {
                    // otherwise we can determine why we failed
                    var reasons = User.failedLogin;
                    console.log(reason);
                    switch (reason) {
                        case reasons.NOT_FOUND:
                            console.log("not found");
                        case reasons.PASSWORD_INCORRECT:
                            // note: these cases are usually treated the same - don't tell
                            // the user *why* the login failed, only that it did
                            console.log("whoops. shit failed, man.");
                            res.json({code:1});
                            break;
                        case reasons.MAX_ATTEMPTS:
                            // send email or otherwise notify user that account is
                            // temporarily locked
                            console.log("max attempts");
                            res.json({code:2});
                            break;
                    }
                }
                return res;
            });
        return res;
    });
}