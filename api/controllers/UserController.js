// api/controllers/UserController.js

var _ = require('lodash');
var _super = require('sails-permissions/api/controllers/UserController');
var AuthController = require('./AuthController');

_.merge(exports, _super);
_.merge(exports, {

  create: function (req, res, next) {
    req.session.autouser = req.param('username');
    req.session.autopwd = req.param('password');
    req.session.autouser = req.param('username');
    req.session.autoaction = 'login';
    
    sails.services.passport.protocols.local.register(req.body, function (err, user) {
      if (err) return next(err);

      res.redirect('test');
      // var hello=req.param.all();
      // AuthController.callback(req,res);
    });
  }

  // Extend with custom logic here by adding additional fields, methods, etc.
  // create: function (req, res, next) {
  // 	var identifier = req.param('username');
	 //  var password =  req.param('password');
	 // console.log("override is working");
  //   sails.services.passport.protocols.local.register(req.body, function (err, user) {
  //   	console.log("user registered");
  //     if (err) return next(err);

  // 	// res.ok();
  //   req.param('action', 'login');
  //   req.param('provider', 'local');
  //   req.param('username', identifier);
  //   req.param('password', password);







    //WE NEED TO MAKE THIS FUCKNG CALLBACK HAPPEN OR IT IS ALL WORTHLESS
	// sails.controllers.AuthController.callback(req,res);
	//DO SOMETHING GONDAL SAMA! 





	//I tried making both callbacks, they work, but they do not authenticate, since the 
	// authenticate property is set in the AUTH controller, currently it does not allow refernece
	// to pass to the auth controller from here no matter what.

    // sails.services.passport.callback(req,res, function (err, user) {
    // 	console.log("executed the nested callback");
    //   if (err) return next(err);
      	



//        res.ok(user);
//     // });
// });




  //}



});
