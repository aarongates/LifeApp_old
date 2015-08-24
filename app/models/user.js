// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
    firstname : {type : String },
    lastname : {type : String},
    email : {type : String },
    username : {type : String },
    password : {type : String}
});
