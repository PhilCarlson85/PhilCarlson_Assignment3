/*
 * Created by Phil on 10/24/16. Example page 169
 */
var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');

// restaurants*** none of these match up with restaurants create

router.get('/restaurants', ctrlRestaurants.restaurantsListAll);
router.get('/restaurants/:id', ctrlRestaurants.restaurantsRetrieveId);
router.post('/restaurants', ctrlRestaurants.restaurantsCreate);
router.put('/restaurants/:id', ctrlRestaurants.restaurantsUpdateId);
router.delete('/restaurants/:id', ctrlRestaurants.restaurantsDeleteOne);

module.exports = router;
