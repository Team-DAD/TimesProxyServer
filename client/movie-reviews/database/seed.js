const faker = require('faker');
const fs = require('fs');

const fileUrl = 'data.csv';
const rows = 100;

const columns = 'username, title, mooz, review, helpful';

fs.writeFile(fileUrl, columns, (err) => {
  if (err) {
    console.log('Data file title write failure', err);
  }
});

for (let i = 1; i < rows + 1; i += 1) {
  const titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

  const id = i;
  // const username = '"' + faker.internet.userName().replace('.', ' ') + '"';
  // const title = '"' + faker.lorem.sentence(titleLength).replace('.', '') + '"';
  // const moozRating = Math.floor(Math.random() * 5) + 1; // rating system
  // const reviewText = '"' + faker.lorem.paragraph() + '"';
  const username = `${faker.internet.userName().toUpperCase().replace('.', ' ')}`;
  const title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', '')}`; // title of review
  const moozRating = Math.floor(Math.random() * 5) + 1; // rating system
  const reviewText = `${faker.lorem.paragraph()}`;
  const helpfulReviews = Math.floor(Math.random() * 300);
  // const dateWritten = faker.date.past();

  const data = `\n${id},${username},${title},${moozRating},${reviewText},${helpfulReviews}`;

  fs.appendFile(fileUrl, data, (err) => {
    if (err) {
      console.log('Data file write failure', err);
    } else {
      // console.log('Successful write to .csv');
    }
  });
}
