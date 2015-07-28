/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
    console.log(req.body);
    if(req.isAuthenticated()){
    	console.log("sdadfaf");
    }
    res.view('login');
  }
};

