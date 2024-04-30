const express = require("express");
const reviewsRouter = express.Router();
const jwt = require("jsonwebtoken");

const { getAllReviews } = require("../db"); // Assuming you have a function to get all reviews

reviewsRouter.get("/reviews", async (req, res) => {
  try {
    const reviews = await getAllReviews(); // Fetch all reviews
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = reviewsRouter;

