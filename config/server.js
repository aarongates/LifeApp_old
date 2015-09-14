//server.js - UpApp

//The bones of it
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://aarongates:money@ds033133.mongolab.com:33133/lifedb');
var Bear = require('./app/models/bear');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//The muscle
var router = express.Router();

//middleware
router.use(function(req,res,next) {
    console.log('Somethings going down');
    next();
});

//funsies
router.get('/', function(req,res) {
    res.json({ message: 'hooray!' })
});

router.route('/bears')
    .post(function(req,res) {
        var bear = new Bear();
        bear.name = req.body.name;
        
        bear.save(function(err) {
            if (err) { res.send(err); }
            res.json({ message: 'Made a bear' });
        });
    })
    
    .get(function(req,res) {
        Bear.find(function(err, bears) {
            if (err) { res.send(err); }
            res.json(bears);
        })
    });
    
router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


app.use('/api', router);

//----------//

app.listen(port);
console.log('Doing it on ' + port);