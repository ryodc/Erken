const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "daan7272!",
  host: "localhost",
  port: "5432",
  database: "backend"
})

module.exports = pool;