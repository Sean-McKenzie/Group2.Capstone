const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");

const volleyball = require("volleyball");
apiRouter.use(volleyball);




const usersRouter = require("./users");
const reviewsRouter = require("./reviews");
//const ratingsRouter = require("./ratings");
const tagsRouter = require("./tags");
const spotifyRouter = require("./spotify");
apiRouter.use("/users", usersRouter);
apiRouter.use("/reviews", reviewsRouter);
//apiRouter.use("/ratings", ratingsRouter);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/spotify", spotifyRouter);
apiRouter.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = apiRouter;
