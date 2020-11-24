var userApi = {};
var respObj = require('../respObj');
var user = require('../models/user');

userApi.create = async function(req, res) {
    var body = req.body;
    var userObj = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address
    };
    let userModel = new user(userObj);
    userModel.save().then((doc) => {
        console.log('saved user', doc);
        respObj.success.message = "User Saved Successful";
        respObj.success.data = doc;
        return res.json(respObj.success);
    }).catch((err) => {
        console.log('error while saving user', err);
        respObj.error.message = err.message;
        return res.json(respObj.error);
    });;
}

userApi.fetch = async function(req, res) {
    var id = req.params.id;
    var userFind;
    userFind = user.find();
    if(id != "all") {
        userFind = user.findOne({_id: id});
    }
    userFind.then((doc) => {
        console.log('users', doc);
        respObj.success.message = "User's Fethed Successfully";
        respObj.success.data = doc;
        return res.json(respObj.success);
    }).catch((err) => {
        console.log('error while fetching users', err);
        respObj.error.message = err.message;
        return res.json(respObj.error);
    });
}

userApi.update = function(req, res) {
    var id = req.params.id;
    let body = req.body;
    let userObj = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address
    };
    user.update({_id: id}, {$set: userObj}).then((doc) => {
        console.log(`Updated user ${id} record`);
        respObj.success.message = `Updated user ${id} record`;
        respObj.success.data = doc;
        return res.json(respObj.success);
    }).catch((err) => {
        console.log("error while updating user record", err);
        respObj.error.message = err.message;
        return res.json(respObj.error);
    })
}

userApi.delete = function(req, res) {
    var id = req.params.id;
    user.deleteOne({_id: id}).then((doc) => {
        console.log(`Deleted user ${id} record`);
        respObj.success.message = `Deleted user ${id}`;
        respObj.success.data = doc;
        return res.json(respObj.success);
    }).catch((err) => {
        console.log("error while deleting user record", err);
        respObj.error.message = err.message;
        return res.json(respObj.error);
    })
}
module.exports = userApi;