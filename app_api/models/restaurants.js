/* restaurants.js"
 **restaurantSchema?
IS THIS SCHEMA CODED OK?
 */

var mongoose = require( 'mongoose' );
var restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    borough: String,
    score: Number,
    restaurant_id: Number,
});

mongoose.model('Restaurants', restaurantSchema);
