const pg = require('pg');
const db = new pg.Client(
 process.env.DATABASE_URL || 'postgres://localhost/group2_capstone_database'
);
// const express = require('express');
// const app = express();
/* const db = new pg.Client({
  connectionString,
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined, //WILL NEED FOR DEPLOYING LATER and running in "start" mode
}); */

module.exports = db;
