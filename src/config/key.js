import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});

export default ({
  db_url: process.env.DATABASE_URL
});
  
    
   