import { MongoClient } from "mongodb";
import { success, error } from "../config/response";

export const inventory_list = async (req, res) => {
  const url = "mongodb+srv://inventory:spcp7TW5mu1QvYTB@cluster0.skgsu.mongodb.net";
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log("Database connected gracefully");
    const db = client.db("myFirstDatabase");
    const collection = db.collection("inventory");
    const data = await collection.find({}).toArray()
    return res.json(success("Success", data, res.statusCode))
  } catch (err) {
    return res.status(400).json(error(err.message, res.statusCode));
  }
}