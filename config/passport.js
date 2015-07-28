// config/passport.js

var _ = require('lodash');
var _super = require('sails-permissions/config/passport');

_.merge(exports, _super);
_.merge(exports, {
  
  // Extend with custom logic here by adding additional fields, methods, etc.
 

});
module.exports.passport={
local: {
    strategy: require('passport-local').Strategy
  },

  basic: {
    strategy: require('passport-http').BasicStrategy,
    protocol: 'basic'
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '436918573176696',
      clientSecret: 'acfc7bd6a5eb4eecbd684ce4bd249a13',
      scope: ['read_stream'] 
    }
  }
};
 