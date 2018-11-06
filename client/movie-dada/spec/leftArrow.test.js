/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import LeftArrow from '../client/src/LeftArrow';

test('it checks if Poster wrapper is defined', () => {
  const wrapper = shallow(
    <LeftArrow prevSlide={jest.fn()} />,
  );
  expect(wrapper).toBeDefined();
});
