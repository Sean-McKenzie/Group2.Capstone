const pg = require('pg');
const db = new pg.Client(
 process.env.DATABASE_URL || 'postgres://tune_talk_user:WpfPaFxhqDgwK9j012wcQqgnBZq6MIzZ@dpg-cpahv1m3e1ms739q90bg-a.ohio-postgres.render.com/tune_talk'
);
// const express = require('express');
// const app = express();
/* const db = new pg.Client({
  connectionString,
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined, //WILL NEED FOR DEPLOYING LATER and running in "start" mode
}); */

module.exports = db;
