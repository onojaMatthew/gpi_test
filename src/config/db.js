// import { MongoClient } from 'mongodb';



// /myFirstDatabase

export const db = async () => {
  // const uri = "mongodb+srv://inventory:spcp7TW5mu1QvYTB@cluster0.skgsu.mongodb.net";
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // let database;
  // try {
  //   await client.connect();
  //   console.log("Database connected gracefully");
  //   const db = client.db("myFirstDatabase");
  //   const collection = db.collection("inventory");
  //   const data = await collection.find({}).toArray()
  //   console.log(data)
  // } catch (error) {
  //   console.log(error.message);
  // }
  
    

  // async function main() {
//     const uri = `mongodb+srv://m001-student:<password>@<clustername>.mongodb.net`;
//     const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
//     try {
//         await mongoClient.connect();
//         console.log("Connected correctly to server");
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await mongoClient.close()
//     }
//  }
 
//  main();
}

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });


// const client = ;
// client.connect(err => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     const collection = client.db("myFirstDatabase");
//     // perform actions on the collection object
//     console.log("Database connection established")
//     console.log(collection)
//     return collection
//   }
//   // client.close();
// });

// export default client;