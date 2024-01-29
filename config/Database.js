const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bocil',
  });
  console.log(connection)
  module.exports = {connection}