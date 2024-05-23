const db = require("./client");

const createReview = async ({
  reviewTXT,
  rating,
  songID,
  albumID,
  artistID,
  user_id,
}) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        INSERT INTO reviews(reviewTXT, rating, songID, albumID, artistID, user_id)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
      [reviewTXT, rating, songID, albumID, artistID, user_id]
    );
    return review;
  } catch (err) {
    throw err;
  }
};

// const createReview = async ({
//   reviewTXT,
//   rating,
//   songID,
//   albumID,
//   artistID,
//   user_id,
//   // rating_id,
// }) => {
//   try {
//     const {
//       rows: [review],
//     } = await db.query(
//       `
//         INSERT INTO reviews(reviewTXT, rating, songID, albumID, artistID, user_id)
//         VALUES($1, $2, $3, $4, $5, $6)
//         RETURNING *`,
//       [reviewTXT, rating, songID, albumID, artistID, user_id]
//     );

//     return review;
//   } catch (err) {
//     throw err;
//   }
// };

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

const getReviewByArtistID = async (artistID) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        SELECT reviewTXT, rating FROM reviews
        WHERE artistID=$1;`,
      [artistID]
    );

    if (!review) {
      return;
    }
    return review;
  } catch (err) {
    throw err;
  }
};

const getReviewByAlbumID = async (albumID) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        SELECT reviewTXT, rating FROM reviews
        WHERE albumID=$1;`,
      [albumID]
    );

    if (!review) {
      return;
    }
    return review;
  } catch (err) {
    throw err;
  }
};

const getReviewBySongID = async (songID) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        SELECT reviewTXT, rating FROM reviews
        WHERE songID=$1;`,
      [songID]
    );

    if (!review) {
      return;
    }
    return review;
  } catch (err) {
    throw err;
  }
};




const getAllReviews = async () => {
  try {
    const { rows: reviews } = await db.query(
      `
        SELECT * FROM reviews;
      `
    );
    console.log(reviews);
    return reviews;
  } catch (err) {
    throw err;
  }
};



const getSongAverageRating = async (songID) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE songID=$1;`,
      [songID]
    );

    if (!rating) {
      return;
    }
    let avg = Math.avg.rating;
    return avg;
  } catch (err) {
    throw err;
  }
};
const getAlbumAverageRating = async (albumID) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE albumID=$1;`,
      [albumID]
    );

    if (!rating) {
      return;
    }
    let avg = Math.avg.rating;
    return avg;
  } catch (err) {
    throw err;
  }
};
const getArtistAverageRating = async (artistID) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE artistID=$1;`,
      [artistID]
    );

    if (!rating) {
      return;
    }
    let avg = Math.avg.rating;
    return avg;
  } catch (err) {
    throw err;
  }
};

const deleteReview = async (reviewID) => {
  try {
       const {
            rows: [review],
       } = await db.query(
            `
        DELETE FROM reviews
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
}


module.exports = {
  createReview,
  getReviewByArtistID,
  getReviewByAlbumID,
  getReviewBySongID,
  getAllReviews,
  deleteReview

};
