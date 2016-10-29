/* restaurants.js = "locations.js"
 **restaurantSchema?

 */

var mongoose = require( 'mongoose' );
var restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    borough: String,
    score: Number,
    restaurant_id: Number,
});

mongoose.model('Restaurant', restaurantSchema);
