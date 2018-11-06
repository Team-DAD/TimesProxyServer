const faker = require('faker');
const fs = require('fs');

const genres = ['Horror', 'Comedy', 'Action', 'Drama', 'Documentary', 'Adult', 'Animation'];
const releaseDate = ['OCTOBER 5, 2017', 'DECEMBER 4, 2000', 'NOVEMBER 20, 1996', 'FEBRUARY 25, 2002', 'MAY 20, 2018', 'SEPTEMBER 4, 1992', 'AUGUST 23, 2010'];
const photos = ['https://s3-us-west-1.amazonaws.com/moovi-photos/0001.jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/0002.jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/0003.jpeg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/0004.jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/0005.jpg',
  'https://s3-us-west-1.amazonaws.com/moovi-photos/IMG_8645.JPG', 'https://s3-us-west-1.amazonaws.com/moovi-photos/Image+from+iOS+(1).jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/Image+from+iOS.jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/Image+uploaded+from+iOS+(1).jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/Image+uploaded+from+iOS+(2).jpg',
  'https://s3-us-west-1.amazonaws.com/moovi-photos/Image+uploaded+from+iOS.jpg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/download+(1).jpeg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/download+(2).jpeg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/download+(3).jpeg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/download+(4).jpeg', 'https://s3-us-west-1.amazonaws.com/moovi-photos/download+(5).jpeg',
  'https://s3-us-west-1.amazonaws.com/moovi-photos/download.jpeg'];
const rating = ['R', 'PG-13', 'PG', 'G', 'NC-17'];
const duration = ['2 hr 15 min', '3 hr 5 min', '1 hr 30 min', '2 hr 45 min', '5 hr 10 min', '10 hr 55min'];

const jsonMaker = (num = 100) => {
  for (let i = 0; i < num; i += 1) {
    const movie = {};
    movie.id = i + 1;
    movie.title = faker.lorem.words();
    movie.score = Math.floor(Math.random() * 100);
    movie.duration = duration[Math.floor(Math.random() * 6)];
    movie.rating = rating[Math.floor(Math.random() * 5)];
    movie.mainPhoto = photos[Math.floor(Math.random() * 17)];
    movie.photos = [photos[Math.floor(Math.random() * 17)], photos[Math.floor(Math.random() * 17)],
      photos[Math.floor(Math.random() * 17)], photos[Math.floor(Math.random() * 17)],
      photos[Math.floor(Math.random() * 17)]];
    movie.genre = genres[Math.floor(Math.random() * 7)];
    // movie.cast = [faker.name.findName(), faker.name.findName(), faker.name.findName(),
    //  faker.name.findName(), faker.name.findName()];
    // movie.director = faker.name.findName();
    movie.releaseDate = releaseDate[Math.floor(Math.random() * 7)];
    movie.synopsis = faker.lorem.paragraph();

    fs.appendFile('seed-data/summaries.json', `${JSON.stringify(movie)}\n`, (err) => {
      if (err) throw err;
    });
  }
};

jsonMaker();
