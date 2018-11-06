import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor (props) {
    super(props);
    this.totalStars = 5;
  }

  emptyStars () {
    const result = [];
    for (let i = 0; i < this.totalStars; i += 1) {
      result.push(
        <span key={i} className="fa fa-star fa-lg" />
      );
    }
    return result;
  }

  coloredStars () {
    const result = [];
    for (let i = 0; i < this.totalStars; i += 1) {
      result.push(
        <span key={i} className="fa fa-star fa-lg checked" />
      );
    }
    return result;
  }

  // consider implementing percentage into state
  fillStar () {
    const { stars } = this.props;
    const percentage = Math.floor((stars / this.totalStars) * 100);
    return `${percentage}%`;
  }

  render () {
    return (
      <div className="ratings">
        <div className="empty-star">
          {this.emptyStars()}
          <div id="fill-star" className="fill-star" style={{ width: this.fillStar() }}>
            {this.coloredStars()}
          </div>
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired
};
export default Rating;
