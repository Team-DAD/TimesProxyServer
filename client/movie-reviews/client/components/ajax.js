import fetch from 'node-fetch';
// run this before component mounting?
// node-fetch may have IE errors
// isomorphic-fetch

export function getRating () {
  return fetch('http://localhost:3013/api/movies/1/rating')
    .then(response => response.json());
}

// don't want this to be returning in array
export function loadReviews () {
  return fetch('http://localhost:3013/api/movies/1/reviews')
    .then(response => response.json());
}
