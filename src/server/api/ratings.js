const express = require("express");
const ratingsRouter = express.Router();
const jwt = require("jsonwebtoken");

const { 
    createRating,
    getSongAverageRating,
    getAlbumAverageRating,
    getArtistAverageRating,
    getAllRatings } = require("../db"); // Assuming you have a function to get all reviews

ratingsRouter.get('/', async (req, res, next) => {
  try {
    const reviews = await getAllRatings(); // Fetch all reviews
    res.send({reviews});
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = ratingsRouter;