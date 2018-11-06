const server = require('../server/index.js');
const request = require('supertest');

request(server)
  .get('/api/movies/:movieid/reviews')
  .expect('Content-Type', /json/)
  .expect(200)
  .end((err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('Server test passed');
    }
  });
