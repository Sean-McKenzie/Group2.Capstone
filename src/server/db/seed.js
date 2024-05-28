const db = require("./client");
const { createUser } = require("./users");
const { createReview } = require("./reviews");
const { createTags } = require("./tags");

const users = [
     {
          name: "mike jones",
          email: "emily@example.com",
          password: "securepass",
          role: "admin",
     },
     {
          name: "guy mcface",
          email: "liu@example.com",
          password: "strongpass",
          role: "user",
     },
     {
          name: "human name",
          email: "bella@example.com",
          password: "pass1234",
          role: "user",
     },
     {
          name: "person person",
          email: "mohammed@example.com",
          password: "mysecretpassword",
          role: "user",
     },
     {
          name: "Craig Pelton",
          email: "john@example.com",
          password: "password123",
          role: "user",
     },
     {
          name: "Jhon Pelton",
          email: "craig@example.com",
          password: "password123",
          role: "user",
     },
     {
          name: "mike jones",
          email: "emily@example.com",
          password: "securepass",
          role: "admin",
     },
     {
          name: "guy mcface",
          email: "liu@example.com",
          password: "strongpass",
          role: "user",
     },
     {
          name: "human name",
          email: "bella@example.com",
          password: "pass1234",
          role: "user",
     },
     {
          name: "person person",
          email: "mohammed@example.com",
          password: "mysecretpassword",
          role: "user",
     },
     {
          name: "Craig Pelton",
          email: "john@example.com",
          password: "password123",
          role: "user",
     },
     {
          name: "Jhon Pelton",
          email: "craig@example.com",
          password: "password123",
          role: "user",
     },
];

const reviews = [
  {
    reviewtxt: "Trash",
    rating: 0,
    songid: "adfaDFSFES5018540SDF",
    user_id: 6,
  },
  {
    reviewtxt: "mid",
    rating: 3,
    albumid: "lkjlisearfslEIRSJLFK",
    user_id: 5,
  },
  {
    reviewtxt: "litty",
    rating: 10,
    artistid: "651518sfsawfeasfeSEWE",
    user_id: 10,
  },
  {
    reviewtxt: "hot garbage",
    rating: 0,
    songid: "lkjiLIJLILIlkjijlkl",
    user_id: 3,
  },
  {
    reviewtxt: "good",
    rating: 1,
    albumid: "oijOIUOIUOIJIOJOIoeioij",
    user_id: 1,
  },
];

const tags = [
  {
    tagtxt: "Study Music",
    songid: "lkjiLIJLILIlkjijlkl",
  },
  {
    tagtxt: "Programming Music",
    songid: "adfaDFSFES5018540SDF",
  },
];

const dropTables = async () => {
  try {
    await db.query(`
        DROP TABLE IF EXISTS users CASCADE;
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS tags;
        `);
  } catch (err) {
    throw err;
  }
};
const createTables = async () => {
  try {
    await db.query(`
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(255) NULL NULL

        );
        CREATE TABLE reviews(
          reviewid SERIAL PRIMARY KEY,
          reviewtxt VARCHAR(255) NOT NULL,
          rating INT,
          songid VARCHAR(255),
          albumid VARCHAR(255),
          artistid VARCHAR(255),
          user_id INT NOT NULL
      );
        CREATE TABLE tags(
          tagid SERIAL PRIMARY KEY,
          tagtxt VARCHAR(255) NOT NULL,
          songid VARCHAR(255)
        );
        `);
  } catch (err) {
    throw err;
  }
};
const addConstraints = async () => {
  try {
    await db.query(
      `
      ALTER TABLE reviews

      ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

      `
    );
  } catch (err) {
    throw err;
  }
};
const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser({
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        role: user.role,
      });
    }
    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};
const insertReviews = async () => {
  try {
    for (const review of reviews) {
      await createReview({
        reviewtxt: review.reviewtxt,
        rating: review.rating,
        songid: review.songid,
        albumid: review.albumid,
        artistid: review.artistid,
        user_id: review.user_id,
      });
    }
    console.log("seed datat inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};

const insertTags = async () => {
  try {
    for (const tag of tags) {
      await createTags({
        tagtxt: tag.tagtxt,
        songid: tag.songid,
      });
    }
    console.log("seed data inserted successfully.");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};

const seedDatabse = async () => {
  try {
    db.connect();
    await dropTables();
    await createTables();
    await insertUsers();
    await insertReviews();

    await insertTags();
    // await addConstraints();   
  } catch (err) {
    throw err;
  } finally {
    db.end();
  }
};
seedDatabse();


