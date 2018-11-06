const request = require('supertest');

const server = require('../server.js');

test('should serve data when the index endpoint is hit', (done) => {
    // I understand we should not normally test static files, but
    // I'm trying to get a handle on server tests, so I decided to make
    // my first test - properly sending back data.
    return request(server)
    .get('/')
    .then((response) => {
        expect(response.text).toMatch('Movie Times')
        server.stop(done)
    })
});

test('should return an array with results when movies endpoint is hit with movie', (done) => {
    return request(server)
        .get('/api/movies/SMTP/2018-10-24/50.000,50.000')
        .then((response) => {
            expect(response.body.length).not.toBe(0);
            server.stop(done)
        })
})

test('should return an array with no results when movies endpoint is hit with movie not in database', (done) => {
    return request(server)
        .get('/api/movies/SMTPO/2018-10-24/50.000,50.000')
        .then((response) => {
            expect(response.body.length).toBe(0);
            server.stop(done)
        })
})

test('should return an array with results when moviesid endpoint is hit with movieid', (done) => {
    return request(server)
    .get('/api/moviesbyid/1/SMTP/2018-10-24/50.000,50.000')
    .then((response) => {
        expect(response.body.length).not.toBe(0);
        server.stop(done)
    })
})

test('should return an array with no results when moviesid endpoint is hit with movie not in database', (done) => {
    return request(server)
        .get('/api/moviesbyid/SMTPO/2018-10-24/50.000,50.000')
        .then((response) => {
            expect(response.body.length).toBe(0);
            server.stop(done)
        })
})