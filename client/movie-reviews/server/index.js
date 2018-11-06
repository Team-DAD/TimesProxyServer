const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const connection = require('../database/connection.js');

const app = express();
const port = 3013;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.use((request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });
  next();
});

app.get('/api/movies/:movieid/rating', (req, res) => {
  connection.query('SELECT AVG(Mooz) \'rating\' FROM movies', (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const round = Math.round(results.rating * 10) / 10;
      results.rating = round.toFixed(1);
      res.status(200).send(results);
    }
  });
});

app.get('/api/movies/:movieid/reviews', (req, res) => {
  connection.query('SELECT * FROM movies ORDER BY helpful DESC LIMIT 100', (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log('listening on port', port));

module.exports = app;
