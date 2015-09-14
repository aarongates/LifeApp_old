// server.js -- LifeApp

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var User           = require('./app/models/user');

// configuration ===========================================
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);
console.log(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json 
//app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
//require('./app/routes')(app); // configure our routes
var router = express.Router();

router.use(function(req,res,next) {
    console.log('Something is happening');
    next();
});

router.get('/fun',function(req,res) {
    res.json({ message:'hooray! this worked!' });
});

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

app.use('/api',router);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;