const express = require("express");
const Movies = require("../models/movie");
const Series = require("../models/series");

const router = express.Router();

router.get("/:title", async (req, res) => {
  const {title} = req.params;
  const movie = await Movies.findOne({title: title});
  const series = await Series.findOne({title: title});

  res.send({
    movie,
    series
  });
});


module.exports = router;