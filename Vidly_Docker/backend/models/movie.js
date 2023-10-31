const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));

const AnotherMovie = mongoose.model('AnotherMovie', new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}));

module.exports = Movie, AnotherMovie; 