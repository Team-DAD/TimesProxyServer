const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'fandango'
});

module.exports = connection;
