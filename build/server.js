"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _key = require("./config/key");

var _key2 = _interopRequireDefault(_key);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _router = require("./middleware/router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = _key2.default.PORT || 3200;

const app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, "/client")));

app.use((0, _morgan2.default)("combined"));
app.use(_express2.default.json());
app.use((0, _cors2.default)());

app.get('/', (req, res) => {
  res.sendFile(_path2.default.join(__dirname + '/client/homePage.html'));
});

(0, _router2.default)(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

exports.default = app;