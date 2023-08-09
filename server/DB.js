const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "dftrjulh1386",
  host: "localhost",
  port: 5432,
  database: "todo",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
});

module.exports = pool;
