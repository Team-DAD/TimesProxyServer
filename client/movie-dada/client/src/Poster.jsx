import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({ poster, title, year }) => {
  let currRelease = '';
  if (year === 2018) {
    currRelease = ' (2018)';
  }
  return (
    <div className="frame">
      <div className="outer">
        <img src={poster} alt={`movie poster for ${title}`} />
      </div>
      <h4>
        {title}
        {currRelease}
      </h4>
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Poster;
