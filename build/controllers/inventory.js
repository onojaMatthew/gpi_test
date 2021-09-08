"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inventory_list = undefined;

var _mongodb = require("mongodb");

var _key = require("../config/key");

var _key2 = _interopRequireDefault(_key);

var _response = require("../config/response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inventory_list = exports.inventory_list = async (req, res) => {
  const url = _key2.default.DATABASE_URL;
  const client = new _mongodb.MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Database connected gracefully");
    const db = client.db("myFirstDatabase");
    const collection = db.collection("inventory");
    const data = await collection.find({}).toArray();
    return res.json((0, _response.success)("Success", data, res.statusCode));
  } catch (err) {
    return res.status(400).json((0, _response.error)(err.message, res.statusCode));
  }
};