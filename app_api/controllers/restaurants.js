/*
 * Created by Phil on 10/24/16. example page 170
 */

var mongoose = require('mongoose');
var Res = mongoose.model('Restaurants');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//Need to get "ListAll working before moving on.

module.exports.restaurantsListAll = function (req, res) {
    Res
        .find()
        .exec(function (err, restaurant) {
            sendJsonResponse(res, 200, restaurant);
        });
};

module.exports.restaurantsRetrieveId = function (req, res) {
    Res
        .findById(req.params.id)
        .exec(function (err, restaurant) {
            sendJsonResponse(res, 200, restaurant);
        });
};

module.exports.restaurantsCreate = function (req, res) {
    Res
        .create({
                name: req.body,
                address: req.body.address,
            }, function (err, restaurant) {
                if (err) {
                    sendJsonResponse(res, 400, err);
                } else {
                    sendJsonResponse(res, 201, restaurant);
                }
            }
        )
};

module.exports.restaurantsDeleteOne = function (req, res) {
    var restaurantid = req.params.restaurantid;
    if (restaurantid) {
        Res
            .findByIdAndRemove(restaurantid)
            .exec(
                function(err, restaurant) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message" : "No restaurantid"
        });
    }
};


module.exports.restaurantsUpdateId = function (req, res) {
    Res
        .findById(req.params.id)
        .exec(
            function (err, restaurant) {
                restaurant.name = req.body.name;
                restaurant.save(function(err, restaurant) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, restaurant)}
                    });
          }
     );
};
