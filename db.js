// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Ibraheem2002',
  database: 'tr_to_en',
});

module.exports = connection;
