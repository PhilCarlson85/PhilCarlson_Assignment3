
var mongoose = require( 'mongoose' );
var gracefulShutdown;

/* VERIFY THIS CONNECTION */
var dbURI = 'mongodb://localhost/PhilCarlson_Assignment2';
mongoose.connect(dbURI);

require('./restaurants');
