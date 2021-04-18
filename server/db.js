const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'postgresdb',
  port: '5432',
  database: 'storereceipts'
})

module.exports = pool
