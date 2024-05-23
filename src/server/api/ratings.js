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
    const ratings = await getAllRatings(); // Fetch all reviews
    res.send({ratings});
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ratingsRouter.get('/artist', async (req, res, next) => {
  try {
    const ratings = await getArtistAverageRating(artistID); // Fetch all reviews
    res.send({ratings});
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ratingsRouter.get('/album', async (req, res, next) => {
  try {
    const ratings = await getAlbumAverageRating(albumID); // Fetch all reviews
    res.send({ratings});
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

ratingsRouter.get('/song', async (req, res, next) => {
  try {
    const ratings = await getSongAverageRating(songID); // Fetch all reviews
    res.send({ratings});
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


ratingsRouter.post('/', async(req, next) => {
  // const {}
})
module.exports = ratingsRouter;