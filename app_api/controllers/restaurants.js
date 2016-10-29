/*
 * Created by Phil on 10/24/16. example page 170
 */

var mongoose = require('mongoose');
var Res = mongoose.model('Restaurant');

module.exports.restaurantsCreate = function (req, res) {
    res.status(200);
    res.json({"status" : "success"});
};

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.restaurantsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
