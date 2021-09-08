"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require("../config/error");

var _error2 = _interopRequireDefault(_error);

var _router = require("../controllers/router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use("/api/v1", _router2.default);
  app.use(_error2.default);
};