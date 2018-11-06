import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ nextSlide }) => (
  <div className="right-arrow" onClick={nextSlide} onKeyUp={nextSlide} role="button" tabIndex="0"><span>▶</span></div>
);

RightArrow.propTypes = {
  nextSlide: PropTypes.func.isRequired,
};

export default RightArrow;
