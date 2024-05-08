const db = require("./client");

const createRating = async ({ rate, songID, albumID, artistID, user_ID }) => {
  try {
    const {
      rows: [rating],
    } = await db.query(
      `
        INSERT INTO ratings (rate, songID, albumID, artistID, user_ID)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
      [rate, songID, albumID, artistID, user_ID]
    );

    return rating;
  } catch (err) {
    throw err;
  }
};

const getAllRatings = async () => {
  try {
    const { rows: ratings } = await db.query(`SELECT * FROM ratings;`);
    console.log(ratings);
    return ratings;
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
        SELECT rate FROM ratings
        WHERE songID=$1;`,
      [songID]
    );

    if (!rating) {
      return;
    }
    let avg = Math.avg.rate;
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
        SELECT rate FROM ratings
        WHERE albumID=$1;`,
      [albumID]
    );

    if (!rate) {
      return;
    }
    let avg = Math.avg.rate;
    return avg;
  } catch (err) {
    throw err;
  }
};
const getArtistAverageRating = async (artistID) => {
  try {
    const {
      rows: [rate],
    } = await db.query(
      `
        SELECT rate FROM ratings
        WHERE artistID=$1;`,
      [artistID]
    );

    if (!rate) {
      return;
    }
    let avg = Math.avg.rate;
    return avg;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createRating,
  getSongAverageRating,
  getAlbumAverageRating,
  getArtistAverageRating,
  getAllRatings,
};
