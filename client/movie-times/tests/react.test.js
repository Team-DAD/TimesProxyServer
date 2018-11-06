/* eslint-env jest */

import { shallow, mount } from 'enzyme';
import React from 'react';
import fetch from 'isomorphic-fetch';
import App from '../client/src/App.jsx';
import Calendar from '../client/src/Calendar.jsx';
import getDays from '../daysinamonth.js';
import Dates from '../client/src/Dates.jsx';
import Theater from '../client/src/Theater.jsx';
import TheaterTime from '../client/src/TheaterTime.jsx';

test('getDays function should have 365 dates', () => {
  const days = new getDays();
  days.fillDays(2018);
  expect(days.yearDates).toHaveLength(365);
});

test('App Component should have a title', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1').length).toBe(1);
});

test('Calendar Component should be within App Component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Calendar).length).toBe(1);
});

test('Calendar Component should have working filterDates method', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  const instance = wrapper.instance();
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  instance.filterDates();
  expect(wrapper.state('filterDates')).toHaveLength(7);
});

test('Calendar Component should have working backDate method', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  const instance = wrapper.instance();
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  instance.backDate();
  expect(wrapper.state('date')).toBe('2018-10-23');
});


test('Calendar Component should have working forwardDate method', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  const instance = wrapper.instance();
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  instance.forwardDate();
  expect(wrapper.state('date')).toBe('2018-10-25');
});

test('Click on back arrow should fire backDate method', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  wrapper.find('.fa-arrow-left').simulate('click');
  expect(wrapper.state('date')).toBe('2018-10-23');
});

test('Click on forward arrow should fire backDate method', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  wrapper.find('.fa-arrow-right').simulate('click');
  expect(wrapper.state('date')).toBe('2018-10-25');
});

test('Dates Component should have 7 dates within Calendar Component', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  const instance = wrapper.instance();
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  instance.filterDates();
  wrapper.update();
  expect(wrapper.find(Dates).length).toBe(7);
});

test('Dates Component should contain three li items', () => {
  const wrapper = shallow(<Dates />);
  expect(wrapper.find('li').length).toBe(3);
});

test('clicking on date should change selected date', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  wrapper.setState({ date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes });
  const instance = wrapper.instance();
  instance.filterDates();
  wrapper.update();
  wrapper.find('ul .month-highlight').at(1).simulate('click');
  expect(wrapper.state('selected')).toBe('2018-10-25');
});

test('pagination should update pages array', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  wrapper.setState({
    date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes, data: [1, 2, 3, 4, 5, 6], 
  });
  const instance = wrapper.instance();
  instance.pagination();
  expect(wrapper.state('pages').length).toBe(2);
});

test('setPage should update page', () => {
  const wrapper = mount(<Calendar />);
  const days = new getDays();
  days.fillDays(2018);
  wrapper.setState({
    date: '2018-10-24', dates: days.yearDates, dateIndex: days.yearIndexes, data: [1, 2, 3, 4, 5, 6],
  });
  const instance = wrapper.instance();
  instance.pagination();
  wrapper.update();
  const mockedEvent = { target: { innerText: '2' } };
  wrapper.find('.page-button').at(1).simulate('click', mockedEvent);
  expect(wrapper.state('page')).toBe(2);
});


test('Theater component should render a theater', () => {
  const wrapper = shallow(<Theater />);
  wrapper.setProps({ theater: 'Patreon', address: '14 Truncheon Drive', times: ['5:30pm', '10:30pm', '2:30pm'] });
  const wrap = wrapper.find('.theatre-header');
  expect(wrap.text()).toContain('Patreon');
});

test('Theater component should render an address', () => {
  const wrapper = shallow(<Theater />);
  wrapper.setProps({ theater: 'Patreon', address: '14 Truncheon Drive', times: ['5:30pm', '10:30pm', '2:30pm'] });
  const wrap = wrapper.find('.theatre-header');
  expect(wrap.text()).toContain('14 Truncheon Drive');
});

test('Theater component should render 3 theatre time components', () => {
  const wrapper = mount(<Theater />);
  wrapper.setProps({ theater: 'Patreon', address: '14 Truncheon Drive', times: ['5:30pm', '10:30pm', '2:30pm'] });
  expect(wrapper.find(TheaterTime).length).toBe(3);
});

test('Theater component should change display on click', () => {
  const wrapper = mount(<Theater />);
  wrapper.setProps({ theater: 'Patreon', address: '14 Truncheon Drive', times: ['5:30pm', '10:30pm', '2:30pm'] });
  const mockEvent = { target: { className: 'fas fa-print' } };
  wrapper.find('.fa-print').simulate('click', mockEvent);
  expect(wrapper.state('displayPrintHead').display).toBe('flex');
});
