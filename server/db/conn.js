const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;

const atlasUri = process.env.ATLAS_URI;

 


var _db;

const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;
mongoose.connect(Db, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Successfully connected to MongoDB.');
});




