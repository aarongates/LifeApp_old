// app/routes.js

module.exports = function(app,router) {
    var User = require('./models/user');
    
    router.use(function(req,res,next) {
        console.log('Something is happening');
        next();
    });

    router.get('/fun',function(req,res) {
        res.json({ message:'hooray! this worked!' });
    });

    require('./routes/userRoutes')(app,router);

    app.use('/api',router);

}
