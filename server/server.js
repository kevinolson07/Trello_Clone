const express = require("express");
const app = express();
const cors = require("cors");



require("dotenv").config({ path: "./config.env" });


const atlasUri = process.env.ATLAS_URI;

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());




const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;
mongoose.connect(Db)
  .then(() => {
    //listen for requests
    app.listen(port, () => {
      console.log(`Connected to database and server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error)
  })



const cardsRouter = require('./routes/routeCards');



app.use('/cards', cardsRouter);


