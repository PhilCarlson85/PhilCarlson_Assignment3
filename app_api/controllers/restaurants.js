/*
 * Created by Phil on 10/24/16. example page 170
 */

var mongoose = require('mongoose');
var Res = mongoose.model('Restaurants');


var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.restaurantsListAll = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsRetrieveId = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsUpdateId = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
