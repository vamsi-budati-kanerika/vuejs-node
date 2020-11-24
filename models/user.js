var mongoose = require("mongoose");
var {Schema} = mongoose;

var userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

module.exports = mongoose.model("user", userSchema);