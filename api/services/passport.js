// api/services/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/api/services/passport');

function passport () { }

passport.prototype = Object.create(_super);
_.extend(passport.prototype, {


	callback: function (req, res, next) {
    var provider = req.param('provider','local');
    var action = req.param('action');
    console.log(provider);
    // Passport.js wasn't really built for local user registration, but it's nice
    // having it tied into everything else.
    if (provider === 'local' && action !== undefined) {
      if (action === 'register' && !req.user) {
        this.protocols.local.register(req, res, next);
      }
      else if (action === 'login' && !req.user) {
        this.protocols.local.login(req, res, next);
      }
      else if (action === 'connect' && req.user) {
        this.protocols.local.connect(req, res, next);
      }
      else if (action === 'disconnect' && req.user) {
        this.protocols.local.disconnect(req, res, next);
      }    
      else {
        next(new Error('Invalid action'));
      }
    } else {
      if (action === 'disconnect' && req.user) {
        this.disconnect(req, res, next) ;
      } else {
        // The provider will redirect the user to this URL after approval. Finish
        // the authentication process by attempting to obtain an access token. If
        // access was granted, the user will be logged in. Otherwise, authentication
        // has failed.
        console.log("Hello");
        this.authenticate(provider, next)(req, res, req.next);
      }
    }
  }



  // Extend with custom logic here by adding additional fields and methods,
  // and/or overriding methods in the superclass.

});

module.exports = new passport();
