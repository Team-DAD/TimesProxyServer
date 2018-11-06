import React from 'react';
// import fetch from 'node-fetch';
import Rating from './Rating';
import ReviewList from './ReviewList';
import { getRating, loadReviews } from './ajax';
import '../../styles/style.css';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      reviews: [], // all reviews (100). this is here for pagination
      rating: 0, // overall rating
      showReviews: [], // displayed reviews
      numDisplay: 10 // number of reviews to display
    };
  }

  componentDidMount () {
    loadReviews()
      .then((data) => {
        this.sortReviews(data);
      });
    getRating()
      .then((data) => {
        this.showRating(data);
      });
  }

  sortReviews (reviews) {
    const { numDisplay } = this.state;
    // edge case where total reviews is less than max reviews displayed
    const display = reviews.length < numDisplay ? reviews.length : numDisplay;
    const displayReviews = [];
    // show 10 elements
    for (let i = 0; i < display; i += 1) {
      displayReviews.push(reviews[i]);
    }
    this.setState({ showReviews: displayReviews, reviews });
  }

  showRating (data) {
    this.setState({ rating: data[0].rating });
  }

  render () {
    const { rating, showReviews } = this.state;

    return (
      <div className="review-container">
        <div className="title-bar">
          <b>
            FAN REVIEWS
          </b>
        </div>
        <div id="overall-rating">
          <Rating stars={rating} />
        </div>
        <ReviewList reviews={showReviews} />
      </div>
    );
  }
}
export default App;
