const db = require("./client");

const createReview = async ({ reviewTXT, rating, songID, albumID, artistID, user_id, rating_id }) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        INSERT INTO reviews(reviewTXT, rating, songID, albumID, artistID, user_id, rating_id)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
      [reviewTXT, rating, songID, albumID, artistID, user_id, rating_id]
    );

    return review;
  } catch (err) {
    throw err;
  }
};

const getReviewByID = async (reviewID) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        SELECT reviewTXT FROM reviews
        WHERE reviewID=$1;`,
      [reviewID]
    );

    if (!review) {
      return;
    }
    return review;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReview,
  getReviewByID,
};
