const db = require("./client");

const createTags = async ({
  tagTXT,
  songID,

}) => {
  try {
    const {
      rows: [tag],
    } = await db.query(
      `
        INSERT INTO tags(tagTXT, songID)
        VALUES($1, $2)
        RETURNING *`,
      [tagTXT, songID]
    );

    return tag;
  } catch (err) {
    throw err;
  }
};
module.exports = {
    createTags
  };