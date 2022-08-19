"use strict";

/** Database for lunchly */

const { Client } = require("pg");

/** MAC EDITION */
// const DB_URI = process.env.NODE_ENV === "test"
//     ? "postgresql:///lunchly_test"
//     : "postgresql:///lunchly";

/** WINDOWS EDITION */
const DB_URI = process.env.NODE_ENV === "test"
  ? "postgresql://esoun:esoun@localhost/lunchly_test" 
  : "postgresql://esoun:esoun@localhost/lunchly";


let db = new Client({
  connectionString: DB_URI,
});

db.connect();


module.exports = db;
