const express = require("express");
const reviewsRouter = express.Router();
const jwt = require("jsonwebtoken");

const { 
  createReview,
  getReviewByID,
  getAllReviews } = require("../db"); // Assuming you have a function to get all reviews

reviewsRouter.get('/', async (req, res, next) => {
  try {
    const reviews = await getAllReviews(); // Fetch all reviews
    res.send({reviews});
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = reviewsRouter;

