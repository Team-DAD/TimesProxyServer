import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TheaterTime = ({ time }) => (
  <div className="time-button">
    {time}
  </div>
);

TheaterTime.propTypes = {
  time: PropTypes.number,
};

TheaterTime.defaultProps = {
  time: '5:00pm',
};

export default TheaterTime;
