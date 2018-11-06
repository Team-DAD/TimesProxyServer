const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movie-summary');

const getSummary = (cb) => {
  mongoose.connection.db.collection('summaries', (err, collection) => {
    collection.find().toArray(cb);
  });
};

exports.getSummary = getSummary;
