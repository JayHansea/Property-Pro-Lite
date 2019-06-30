"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../src/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/no-unresolved */

/* eslint-disable no-console */
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_express["default"].json());
app.use('/', _express["default"]["static"]('UI'));
(0, _routes["default"])(app); // server

app.listen(port, function () {
  console.log("Server Started On Port ".concat(port));
});
var _default = app;
exports["default"] = _default;