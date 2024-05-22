const db = require("./client");
const { createUser } = require("./users");
const { createReview } = require("./reviews");
const { createTags } = require("./tags");

const users = [
  {
    name: "mike jones",
    email: "emily@example.com",
    password: "securepass",
  },
  {
    name: "guy mcface",
    email: "liu@example.com",
    password: "strongpass",
  },
  {
    name: "human name",
    email: "bella@example.com",
    password: "pass1234",
  },
  {
    name: "person person",
    email: "mohammed@example.com",
    password: "mysecretpassword",
  },
  {
    name: "Craig Pelton",
    email: "john@example.com",
    password: "password123",
  },
  {
    name: "Jhon Pelton",
    email: "craig@example.com",
    password: "password123",
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
            password VARCHAR(255) NOT NULL
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

//old as of 05/20/24
// const dropTables = async () => {
//   try {
//     await db.query(`
//         DROP TABLE IF EXISTS users CASCADE;
//         DROP TABLE IF EXISTS reviews;
//         DROP TABLE IF EXISTS ratings;
//         `);
//   } catch (err) {
//     throw err;
//   }
// };

// const createTables = async () => {
//   try {
//     await db.query(`
//         CREATE TABLE users(
//             userID SERIAL PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL
//         );
//         CREATE TABLE ratings(
//           ratingID SERIAL PRIMARY KEY,
//           rate INT,
//           songID VARCHAR(255),
//           albumID VARCHAR(255),
//           artistID VARCHAR(255),
//           user_ID INT NOT NULL
//         );
//         CREATE TABLE reviews(
//           reviewID SERIAL PRIMARY KEY,
//           reviewTXT VARCHAR(255) NOT NULL,
//           rating INT,
//           songID VARCHAR(255),
//           albumID VARCHAR(255),
//           artistID VARCHAR(255),
//           user_id INT NOT NULL,
//           rating_id INT NOT NULL
//       );

//        `);
//   } catch (err) {
//     throw err;
//   }
// };

// const addConstraints = async () => {
//   try {
//     await db.query(
//       `ALTER TABLE ratings
//       ADD FOREIGN KEY (user_ID) REFERENCES users(userID);
//       ALTER TABLE reviews
//       ADD FOREIGN KEY (user_id) REFERENCES users(userID);
//       ALTER TABLE reviews
//       ADD FOREIGN KEY (rating_id) REFERENCES ratings(ratingID);`
//     );
//   } catch (err) {
//     throw err;
//   }
// };

// const insertUsers = async () => {
//   try {
//     for (const user of users) {
//       await createUser({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       });
//     }
//     console.log("Seed data inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };
// const insertReviews = async () => {
//   try {
//     for (const review of reviews) {
//       await createReview({
//         reviewTXT: review.reviewTXT,
//         rating: review.rating,
//         songID: review.songID,
//         albumID: review.albumID,
//         artistID: review.artistID,
//         user_id: review.user_id,
//         rating_id: review.rating_id,
//       });
//     }
//     console.log("seed datat inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };

// const insertRatings = async () => {
//   try {
//     for (const rating of ratings) {
//       await createRating({
//         rate: rating.rate,
//         songID: rating.songID,
//         albumID: rating.albumID,
//         artistID: rating.artistID,
//         user_ID: rating.user_ID,
//       });
//     }
//     console.log("seed datat inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };

// const seedDatabse = async () => {
//   try {
//     db.connect();
//     await dropTables();
//     await createTables();
//     await insertUsers();
//     await insertReviews();
//     await insertRatings();
//     await addConstraints();
//   } catch (err) {
//     throw err;
//   } finally {
//     db.end();
//   }
// };

// seedDatabse();

// const db = require("./client");
// const { createUser } = require("./users");
// const { createReview } = require("./reviews");
// const { createRating } = require("./ratings");
// const { createTags } = require("./tags");

// const users = [
//   {
//     name: "mike jones",
//     email: "emily@example.com",
//     password: "securepass",
//   },
//   {
//     name: "guy mcface",
//     email: "liu@example.com",
//     password: "strongpass",
//   },
//   {
//     name: "human name",
//     email: "bella@example.com",
//     password: "pass1234",
//   },
//   {
//     name: "person person",
//     email: "mohammed@example.com",
//     password: "mysecretpassword",
//   },
//   {
//     name: "Craig Pelton",
//     email: "john@example.com",
//     password: "password123",
//   },
//   // Add more user objects as needed
// ];
// const reviews = [
//   {
//     reviewTXT: "Trash",
//     rating: 0,
//     songID: "adfaDFSFES5018540SDF",
//     user_id: 6,
//     rating_id: 1,
//   },
//   {
//     reviewTXT: "mid",
//     rating: 3,
//     albumID: "lkjlisearfslEIRSJLFK",
//     user_id: 5,
//     rating_id: 2,
//   },
//   {
//     reviewTXT: "litty",
//     rating: 10,
//     artistID: "651518sfsawfeasfeSEWE",
//     user_id: 10,
//     rating_id: 3,
//   },
//   {
//     reviewTXT: "hot garbage",
//     rating: 0,
//     songID: "lkjiLIJLILIlkjijlkl",
//     user_id: 3,
//     rating_id: 4,
//   },
//   {
//     reviewTXT: "good",
//     rating: 1,
//     albumID: "oijOIUOIUOIJIOJOIoeioij",
//     user_id: 1,
//     rating_id: 5,
//   },
// ];
// const ratings = [
//   {
//     rate: 0,
//     songID: "adfaDFSFES5018540SDF",
//     user_ID: 6,
//   },
//   {
//     rate: 3,
//     albumID: "lkjlisearfslEIRSJLFK",
//     user_ID: 5,
//   },
//   {
//     rate: 10,
//     artistID: "651518sfsawfeasfeSEWE",
//     user_ID: 10,
//   },
//   {
//     rate: 0,
//     songID: "lkjiLIJLILIlkjijlkl",
//     user_ID: 3,
//   },
//   {
//     rate: 1,
//     albumID: "oijOIUOIUOIJIOJOIoeioij",
//     user_ID: 1,
//   },
// ];
// const tags = [
//   {
//     tagTXT: "Study Music",
//     songID: "lkjiLIJLILIlkjijlkl"
//   },
//   {
//     tagTXT: "Programming Music",
//     songID: "adfaDFSFES5018540SDF"
//   },
// ];

// const dropTables = async () => {
//   try {
//     await db.query(`
//         DROP TABLE IF EXISTS users CASCADE;
//         DROP TABLE IF EXISTS reviews;
//         DROP TABLE IF EXISTS ratings;
//         DROP TABLE IF EXISTS tags;
//         `);
//   } catch (err) {
//     throw err;
//   }
// };

// const createTables = async () => {
//   try {
//     await db.query(`
//         CREATE TABLE users(
//             userID SERIAL PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL
//         );
//         CREATE TABLE ratings(
//           ratingID SERIAL PRIMARY KEY,
//           rate INT,
//           songID VARCHAR(255),
//           albumID VARCHAR(255),
//           artistID VARCHAR(255),
//           user_ID INT NOT NULL
//         );
//         CREATE TABLE reviews(
//           reviewID SERIAL PRIMARY KEY,
//           reviewTXT VARCHAR(255) NOT NULL,
//           rating INT,
//           songID VARCHAR(255),
//           albumID VARCHAR(255),
//           artistID VARCHAR(255),
//           user_id INT NOT NULL,
//           rating_id INT NOT NULL

//       );
//         CREATE TABLE tags(
//           tagID SERIAL PRIMARY KEY,
//           tagTXT VARCHAR(255) NOT NULL,
//           songID VARCHAR(255)
//         );
//         `);
//   } catch (err) {
//     throw err;
//   }
// };

// const addConstraints = async () => {
//   try {
//     await db.query(
//       `ALTER TABLE ratings
//       ADD FOREIGN KEY (user_ID) REFERENCES users(userID);
//       ALTER TABLE reviews
//       ADD FOREIGN KEY (user_id) REFERENCES users(userID);
//       ALTER TABLE reviews
//       ADD FOREIGN KEY (rating_id) REFERENCES ratings(ratingID);
//       `
//     );
//   } catch (err) {
//     throw err;
//   }
// };

// const insertUsers = async () => {
//   try {
//     for (const user of users) {
//       await createUser({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       });
//     }
//     console.log("Seed data inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };
// const insertReviews = async () => {
//   try {
//     for (const review of reviews) {
//       await createReview({
//         reviewTXT: review.reviewTXT,
//         rating: review.rating,
//         songID: review.songID,
//         albumID: review.albumID,
//         artistID: review.artistID,
//         user_id: review.user_id,
//         rating_id: review.rating_id,
//       });
//     }
//     console.log("seed datat inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };

// const insertRatings = async () => {
//   try {
//     for (const rating of ratings) {
//       await createRating({
//         rate: rating.rate,
//         songID: rating.songID,
//         albumID: rating.albumID,
//         artistID: rating.artistID,
//         user_ID: rating.user_ID,
//       });
//     }
//     console.log("seed datat inserted successfully.");
//   } catch (error) {
//     console.error("Error inserting seed data:", error);
//   }
// };

// const insertTags = async () => {
//   try{
//     for (const tag of tags) {
//       await createTags({
//         tagTXT: tag.tagTXT,
//         songID: tag.songID,
//       });
//     }
//     console.log("seed data inserted successfully.");
//   }
//   catch (error)
//   {
//     console.error("Error inserting seed data:", error);
//   }
// }

// const seedDatabse = async () => {
//   try {
//     db.connect();
//     await dropTables();
//     await createTables();
//     await insertUsers();
//     await insertReviews();
//     await insertRatings();
//     await insertTags();
//     await addConstraints();
//   } catch (err) {
//     throw err;
//   } finally {
//     db.end();
//   }
// };

// seedDatabse();

// Add more user objects to reach a length of 15
//   {
//     name: "Jane Doe",
//     email: "jane@example.com",
//     password: "password123",
//   },
//   {
//     name: "John Smith",
//     email: "john.smith@example.com",
//     password: "password456",
//   },
//   {
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     password: "alicepass",
//   },
//   {
//     name: "Bob Johnson",
//     email: "bob@example.com",
//     password: "bobpass",
//   },
//   {
//     name: "Emily Brown",
//     email: "emily.brown@example.com",
//     password: "emilypass",
//   },
//   {
//     name: "David Lee",
//     email: "david@example.com",
//     password: "davidpass",
//   },
//   {
//     name: "Sarah Davis",
//     email: "sarah@example.com",
//     password: "sarahpass",
//   },
//   {
//     name: "Michael Wilson",
//     email: "michael@example.com",
//     password: "michaelpass",
//   },
//   {
//     name: "Jennifer Taylor",
//     email: "jennifer@example.com",
//     password: "jenniferpass",
//   },
// ];
