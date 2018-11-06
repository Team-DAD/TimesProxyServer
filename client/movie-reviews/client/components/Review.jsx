import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Review = (props) => {
  const { review } = props;
  return (
    <div className="review">
      <Rating stars={review.Mooz} />
      <div className="review-title">
        <b>
          {review.Title}
        </b>
      </div>
      <div className="review-username">
        BY
        {` ${review.Username}`}
      </div>
      <div className="review-text">
        {review.Review}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    Title: PropTypes.string,
    Mooz: PropTypes.number,
    Username: PropTypes.string,
    Review: PropTypes.string
  }).isRequired
};

export default Review;
