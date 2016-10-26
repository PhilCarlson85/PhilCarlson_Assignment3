/*
 * Created by Phil on 10/24/16. Example page 169
 */

var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');

// restaurants
router.get('/restaurants', ctrlRestaurants.restaurantsListAll);
router.get('/restaurants/5069b47aa892630aae000001', ctrlRestaurants.restaurantsRetrieveId);
router.post('/wines', ctrlRestaurants.restaurantsAddNew);
router.put('/restaurants/5069b47aa892630aae000001', ctrlRestaurants.restaurantsUpdateId);
router.delete('/restaurants/5069b47aa892630aae000001', ctrlRestaurants.restaurantsDeleteOne);

module.exports = router;
