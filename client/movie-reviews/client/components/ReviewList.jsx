import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <div className="review-list">
      { reviews.map(review => (
        <Review key={review.Username} review={review} />))
      }
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review: PropTypes.shape({
      Title: PropTypes.string,
      Mooz: PropTypes.number,
      Username: PropTypes.string,
      Review: PropTypes.string
    })
  })).isRequired
};

export default ReviewList;
