import React from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';

const PosterRow = ({ movies, currIndex }) => (
  <div className="posters">
    {movies.slice(currIndex, currIndex + 8).map(poster => (
      <Poster poster={poster.image} title={poster.title} year={poster.year} key={poster.id} />))}
  </div>
);

PosterRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  currIndex: PropTypes.number.isRequired,
};

export default PosterRow;
