import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ prevSlide }) => (
  <div className="left-arrow" onClick={prevSlide} onKeyUp={prevSlide} role="button" tabIndex="0"><span>◀</span></div>
);

LeftArrow.propTypes = {
  prevSlide: PropTypes.func.isRequired,
};

export default LeftArrow;
