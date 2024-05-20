const express = require("express");
const reviewsRouter = express.Router();
const jwt = require("jsonwebtoken");

const { createReview, getReviewByID, getAllReviews } = require("../db"); // Assuming you have a function to get all reviews
const isLoggedIn = require("./authmid");

reviewsRouter.get("/", async (req, res, next) => {
  console.log("reviews are:");
  try {
    const reviews = await getAllReviews(); // Fetch all review
    res.send({ reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

reviewsRouter.post("/comment", async (req, res, next) => {
  const { reviewTxT, rating, songid, albumid, artistid, user_id } = req.body;
  try {
    const review = await createReview({
      reviewTxT,
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

// reviewsRouter.post("/comment", isLoggedIn, async (req, res, next) => {
//   const { reviewTXT, rating, songid, albumid, artistid } = req.body;
//   try {
//     console.log(req.body);
//     const review = await createReview({
//       reviewTXT,
//       rating,
//       songid,
//       albumid,
//       artistid,
//       user_id: req.user.userid,
//     });
//     console.log(review);
//     res.status(201).json({ review }); // <-- Sending response
//   } catch (err) {
//     next(err);
//     console.log(err);
//   }
// });

// //add isloggedin
// reviewsRouter.post("/comment", async (req, res, next) => {
//   // <-- Added 'res' and 'next' parameters
//   const { reviewTxT, rating, songid, albumid, artistid, user_id, rating_id } =
//     req.body;
//   try {
//     const review = await createReview({
//       reviewTxT,
//       rating,
//       songid,
//       albumid,
//       artistid,
//       user_id,
//       rating_id,
//     });
//     // res.status(201).json({ review }); // <-- Sending response
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = reviewsRouter;
