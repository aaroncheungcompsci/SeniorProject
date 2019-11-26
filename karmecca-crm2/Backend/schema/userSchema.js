var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: {type: Date, default: Date.now}
});

var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    car: String,
    //approved: Boolean,
    created_at: {type: Date, default: Date.now}
})

//create model called User which uses schema userSchema
mongoose.model('User', userSchema);
//create model called Customer which uses schema customerSchema
mongoose.model('Customer', customerSchema);