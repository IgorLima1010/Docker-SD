const mongoose = require("mongoose");

const dbUrl2 =  "mongodb://db2/vidly2";

const seriesDB =  mongoose.createConnection(dbUrl2, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  
console.log("Connected to MongoDB: " + dbUrl2);
const close = () => seriesDB.close();

module.exports = { seriesDB, close, url: dbUrl2 };
