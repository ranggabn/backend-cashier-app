var mysql = require("mysql");

const pool = mysql.createPool({
  host: "remotemysql.com",
  port: "3306",
  user: "n8iU6eOeCM",
  password: "Yke6P5cMSE",
  database: "n8iU6eOeCM",
});

// ... later
pool.query("select 1 + 1", (err, rows) => {
  /* */
});

module.exports = pool;
