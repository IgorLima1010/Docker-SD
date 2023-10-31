const mongoose = require("mongoose")
const {movieDB} = require("../db");

const Movie = movieDB.model('Movie', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));


module.exports = Movie; 