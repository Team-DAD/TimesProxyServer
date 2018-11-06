/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import RightArrow from '../client/src/RightArrow';

test('it checks if Poster wrapper is defined', () => {
  const wrapper = shallow(
    <RightArrow nextSlide={jest.fn()} />,
  );
  expect(wrapper).toBeDefined();
});
