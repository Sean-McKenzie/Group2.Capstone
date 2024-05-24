const express = require("express");
const reviewsRouter = express.Router();
const jwt = require("jsonwebtoken");

const { createReview, getReviewByID, getAllReviews } = require("../db"); // Assuming you have a function to get all reviews
const isLoggedIn = require("./authmid");

// reviewsRouter.get("/", async (req, res, next) => {
//   console.log("reviews are:");
// });

const {
  //createReview,
  getReviewByArtistID,
  getReviewByAlbumID,
  getReviewBySongID,
  getSongAverageRating,
  getAlbumAverageRating,
  getArtistAverageRating,
  // getAllReviews,
  fetchArtist,
  fetchAlbum,
  fetchSingleTrack,
} = require("../db"); // Assuming you have a function to get all reviews

// reviewsRouter.get("/", async (req, res, next) => {

//   try {
//     const reviews = await getAllReviews(); // Fetch all review
//     res.send({ reviews });
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
reviewsRouter.get("/", async (req, res, next) => {
  try {
    const reviews = await getAllReviews(); // Fetch all review
    res.send({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

reviewsRouter.post("/comment", isLoggedIn, async (req, res, next) => {
  const { reviewtxt, rating, songid, albumid, artistid, user_id } = req.body;
  try {
    const review = await createReview({
      reviewtxt,
      rating,
      songid,
      albumid,
      artistid,
      user_id,
    });
    console.log(review);
    res.status(201).json({ review });
  } catch (err) {
    next(err);
  }
});

reviewsRouter.get("/artists/:artistId", async (req, res, next) => {
  try {
    const reviews = await getReviewByArtistID(req.params.artistId);
    // res.send({ reviews }, { ArtistInfo });
    res.send(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

reviewsRouter.get("/albums/:albumId", async (req, res, next) => {
  try {
    const reviews = await getReviewByAlbumID(req.params.albumId);
    res.send(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

reviewsRouter.get("/topsongs/:songId", async (req, res, next) => {
  try {
    const reviews = await getReviewBySongID(req.params.songId);
    res.send(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// reviewsRouter.post("/comment", async (req, next) => {
//   const { reviewTxT, rating, songid, albumid, artistid, user_id } = req.body;
//   try {
//     const review = await createReview({
//       reviewTxT,
//       rating,
//       songid,
//       albumid,
//       artistid,
//       user_id,
//     });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = reviewsRouter;
