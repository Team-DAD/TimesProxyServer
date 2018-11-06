/* eslint-env jest */

const request = require('supertest');
const app = require('../server/index.js');

xtest('responds with a list of all related movies', (done) => {
  request(app)
    .get('/api/movies/6/relatedmovies')
    .expect(200)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
