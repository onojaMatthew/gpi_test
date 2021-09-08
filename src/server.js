import path from "path";
import key from "./config/key"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./middleware/router";


const port = key.PORT || 3200;

const app = express();

app.use(express.static(path.join(__dirname, "/client")));

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

app.get( '/', ( req, res ) => {
  res.sendFile( path.join( __dirname + '/client/homePage.html' ) );
} );

router(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

export default app;