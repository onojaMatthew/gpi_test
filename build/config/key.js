"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config({ path: _path2.default.resolve(__dirname + "/../../.env") });

exports.default = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT
};