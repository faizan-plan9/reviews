// api/models/User.js

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {

  // Extend with custom logic here by adding additional fields, methods, etc.
  attributes: {
  	  age: {
      type: 'int',
      notNull: true
    },
  	  phonenumber: {
      type: 'string',
      notNull: true
    },
	friends: { many: 'User' }
  }




});
