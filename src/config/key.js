import path from "path";
require("dotenv").config({ path: path.resolve(__dirname + "/../../.env")});

export default ({
  
  PORT: process.env.PORT,
});
  
    
   