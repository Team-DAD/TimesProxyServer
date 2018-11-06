/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import PosterRow from '../client/src/PosterRow';

const movies = require('./mockData.json');

test('it checks to see if PosterRow wrapper is defined', () => {
  const wrapper = shallow(<PosterRow movies={movies} currIndex={movies[0].year} />);
  expect(wrapper).toBeDefined();
});

test('it checks if map returns 8 items', () => {
  const wrapper = shallow(
    <PosterRow movies={movies} currIndex={0} />,
  );
  expect(wrapper.children()).toHaveLength(8);
});
