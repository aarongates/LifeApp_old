 // app/routes.js

// grab the nerd model we just created
var Tutorial = require('./models/tutorial');
var User = require('./models/user');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/tutorials', function(req, res) {
        // use mongoose to get all nerds in the database
        Tutorial.find(function(err, tutorials) {
            if (err) res.send(err);
            res.json(tutorials); // return all nerds in JSON format
        });
    });
    
    app.get('/api/users', function(req,res) {
        User.find(function(err,users) {
            if (err) res.send(err);
            res.json(users);
        });
    });
    
    app.get('/api/users/:id', function(req,res) {
        User.findOne()
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    //app.get('*', function(req, res) {
    //    res.sendfile('./public/index.html'); // load our public/index.html file
    //});

};












