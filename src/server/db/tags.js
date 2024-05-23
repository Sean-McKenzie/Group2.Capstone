const db = require("./client");

const createTags = async ({
  tagtxt,
  songid,

}) => {
  try {
    const {
      rows: [tag],
    } = await db.query(
      `
        INSERT INTO tags(tagtxt, songid)
        VALUES($1, $2)
        RETURNING *`,
      [tagtxt, songid]
    );

    return tag;
  } catch (err) {
    throw err;
  }
};
module.exports = {
    createTags
  };