// server.js
const express = require('express');
const app = express();
const connection = require('./db');

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  connection.query('SELECT * FROM trtoen ORDER BY RAND() LIMIT 1', (err, results) => {
    if (err) {
      console.error('Error fetching a random word from the database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }


    res.render("index", { word: results[0] });
  });
});

app.listen(3000, () => {});
