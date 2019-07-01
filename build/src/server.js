'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
var port = process.env.PORT || 3000;

app.use('/', _express2.default.static('UI'));

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server Started On Port ' + port);
});

exports.default = app;