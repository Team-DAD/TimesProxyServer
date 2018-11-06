/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/App';

const movies = require('./mockData.json');

test('it checks to see if App wrapper is defined', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});

test('it should have initial state for currIndex', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().currIndex).toBe(0);
});

test('it should have initial state for movieList', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().movieList).toEqual([]);
});

test('it checks to see if an h2 exists', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2').length !== 0).toBe(true);
});

test('it checks that prevSlide function works', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ currIndex: 2 });
  wrapper.instance().prevSlide();
  expect(wrapper.state('currIndex')).toBe(1);
});

test('it checks that nextSlide function works', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ movieList: movies });
  wrapper.instance().nextSlide();
  expect(wrapper.state('currIndex')).toBe(1);
});
