const db = require("./client");

const createReview = async ({
  reviewtxt,
  rating,
  songid,
  albumid,
  artistid,
  user_id,
}) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        INSERT INTO reviews(reviewtxt, rating, songid, albumid, artistid, user_id)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
      [reviewtxt, rating, songid, albumid, artistid, user_id]
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

const getReviewByID = async (reviewid) => {
  try {
    const {
      rows: [review],
    } = await db.query(
      `
        SELECT reviewtxt FROM reviews
        WHERE reviewid=$1;`,
      [reviewid]
    );

    if (!review) {
      return;
    }
    return review;
  } catch (err) {
    throw err;
  }
};

const getReviewByArtistID = async (artistid) => {
  try {
    const { rows } = await db.query(
      `
        SELECT reviewtxt, rating FROM reviews
        WHERE artistid=$1;`,
      [artistid]
    );

    // if (!reviews) {

    //   return;
    // }
    console.log("review rows: ", rows);
    return rows;
  } catch (err) {
    throw err;
  }
};

const getReviewByAlbumID = async (albumid) => {
  try {
    const {
       rows
    } = await db.query(
      `
        SELECT reviewtxt, rating FROM reviews
        WHERE albumid=$1;`,
      [albumid]
    );

    // if (!review) {
    //   return;
    // }
    return rows;
  } catch (err) {
    throw err;
  }
};

const getReviewBySongID = async (songid) => {
  try {
    const {
      rows
    } = await db.query(
      `
        SELECT reviewtxt, rating FROM reviews
        WHERE songid=$1;`,
      [songid]
    );

    // if (!review) {
    //   return;
    // }
    return rows;
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

const getSongAverageRating = async (songid) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE songid=$1;`,
      [songid]
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
const getAlbumAverageRating = async (albumid) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE albumid=$1;`,
      [albumid]
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
const getArtistAverageRating = async (artistid) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        SELECT rating FROM reviews
        WHERE artistid=$1;`,
      [artistid]
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
