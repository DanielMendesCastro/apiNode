'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});
UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }
  _bcrypt2.default.genSalt(10, function (err, salt) {
    if (err) return next(err);
    _bcrypt2.default.hash(user.password, salt, function (hashErr, hash) {
      if (hashErr) return next(hashErr);
      user.password = hash;
      next();
    });
  });
});

exports.default = _mongoose2.default.model('User', UserSchema);