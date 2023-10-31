const mongoose = require("mongoose");

const dbUrl =  "mongodb://db/vidly";

const movieDB =  mongoose.createConnection(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  
console.log("Connected to MongoDB: " + dbUrl);

const close = () => movieDB.close();

module.exports = { movieDB, close, url: dbUrl };
