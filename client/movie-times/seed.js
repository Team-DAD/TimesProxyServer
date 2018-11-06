const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const table = 'MovieTimes';

const movie_one = '' + faker.random.words() + '';
const movie_two = '' + faker.random.words() + '';
const movie_id = 1;
const movie_id_two = 2;

const times_one = JSON.stringify({'5:30pm': '5:30', '3:00pm': '3:00', '12:30pm': '12:30', '11:00pm': '11:00', '7:30pm': '7:30'})
const times_two = JSON.stringify({'11:00am': '11:00', '5:30pm': '5:30', '8:00pm': '8:00', '10:30pm': '10:30'})

const createData = (movie, movId) => {
    
    const theater = '' + faker.random.words() + '';
    const address = '' + faker.fake("{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}") + ''
    const date = moment(faker.date.recent()).format("YYYY-MM-DD");
    const lat = faker.address.latitude();
    const long = faker.address.longitude();

    let num = Math.round(Math.random()*2);

    let times;
    if (num === 1) {
        times = times_one
    } else {
        times = times_two
    }

    const query = `\nINSERT INTO ${table} (movie, theater, Address, Date, Latitude, Longitude, movie_id, times) VALUES('${movie}', '${theater}', '${address}', '${date}', ${lat}, ${long}, ${movId}, '${times}');\n`

    fs.appendFile('schema.sql', query, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('successful write.');
        }
    })
}

for (var i = 0; i < 100; i++) {
    createData(movie_one, movie_id);
}
