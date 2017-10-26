var mongoose = require('mongoose');

var memberSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    memberId: Number,
    rate: Number
})
mongoose.model('Member',memberSchema)