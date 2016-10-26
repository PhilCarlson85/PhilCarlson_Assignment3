/**
 * Created by Phil on 10/16/16.
 */

/* GET About page */
module.exports.about = function(req, res){
    res.render('index', { title: 'About' });
};
