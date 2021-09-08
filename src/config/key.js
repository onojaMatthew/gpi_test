import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});

export default ({
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
});
  
    
   