const faker = require('faker');
const fs = require('fs');

const randomInt = max => Math.floor(Math.random() * max + 1);

const randNum = max => Math.floor(Math.random() * max);

fs.writeFile('database/movie.csv', 'id,title,year,image,genre', (err) => {
  if (err) throw err;
});

const genres = ['action', 'romance', 'comedy', 'horror', 'documentary'];

for (let i = 1; i < 101; i += 1) {
  let year = faker.date.future();
  year = Number(JSON.stringify(year).slice(1, 5));

  const movie = {
    title: faker.lorem.words(),
    year,
    image: `https://s3-us-west-1.amazonaws.com/moovi-images/${randomInt(20)}.jpeg`,
    genre: genres[randNum(genres.length)],
  };

  fs.appendFile('database/movie.csv', `\n"${i}","${movie.title}",${movie.year},"${movie.image}","${movie.genre}"`, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
