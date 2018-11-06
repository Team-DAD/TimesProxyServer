/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Poster from '../client/src/Poster';

const movies = require('./mockData.json');

test('it checks if Poster wrapper is defined', () => {
  const wrapper = shallow(
    <Poster poster={movies[0].image} title={movies[0].title} year={movies[0].year} />,
  );
  expect(wrapper).toBeDefined();
});

test('it checks if year is equal to 2018, currRelease will equal " (2018)"', () => {
  const wrapper = shallow(
    <Poster poster={movies[3].image} title={movies[3].title} year={movies[3].year} />,
  );
  expect(wrapper.find('h4').text()).toEqual('debitis et autem (2018)');
});

test('it checks if year is equal to 2019', () => {
  const wrapper = shallow(
    <Poster poster={movies[0].image} title={movies[0].title} year={movies[0].year} />,
  );
  expect(wrapper.find('h4').text()).toBe('ex voluptas quibusdam');
});
