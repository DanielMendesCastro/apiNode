'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/** GET /api-status - Check service status **/
router.get('/api-status', function (req, res) {
  return res.json({
    status: "ok"
  });
});
router.use('/users', _users2.default);
exports.default = router;
module.exports = exports['default'];