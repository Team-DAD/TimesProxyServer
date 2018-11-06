/*eslint-disable */
import React from 'react';
import {
  shallow, mount, render
} from 'enzyme';

// Factor into different testing files for each component
import App from '../client/components/App';
import Rating from '../client/components/Rating';
import ReviewList from '../client/components/ReviewList';
import Review from '../client/components/Review';
// import { getRating, loadReviews } from './components/ajax';

const reviews = [
  {
      "id": 1,
      "Username": "name1",
      "Title": "title1",
      "Mooz": 2,
      "Review": "text1",
      "Helpful": 296
  },
  {
      "id": 2,
      "Username": "name2",
      "Title": "title2",
      "Mooz": 5,
      "Review": "text2",
      "Helpful": 295
  }];

describe('Testing App component', () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const rating = [{rating: 4.5}];
  it('title bar should render', () => {
    expect(wrapper.contains(<b>FAN REVIEWS</b>)).toBe(true);
    expect(wrapper.find('.title-bar')).toHaveLength(1);
  });
  it('overall rating should render', () => {
    expect(wrapper.find('#overall-rating')).toBeTruthy();
  });
  it('should display maximum 10 items at a time', () => {
    expect(wrapper.state('numDisplay')).toBe(10);
  });
  instance.sortReviews(reviews);
  it('should store all the sorted reviews', () => {
    expect(wrapper.state('reviews').length).toBe(2);
  });
  it('sortReviews() should set correct number of reviews to be displayed', () => {
    expect(wrapper.state('showReviews').length).toBe(2);
  });
  const review = wrapper.state('showReviews')[0];
  it('should display the correct sorted reviews', () => {
    expect(review['Helpful']).toBe(reviews[0]['Helpful']);
  });
  instance.showRating(rating);
  it('showRating() should correctly get the average rating', () => {
    expect(wrapper.state('rating')).toBe(rating[0].rating);
  });
});

describe('Testing Rating component', () => {
  const wrapper = shallow(<Rating stars={2}/>);
  it('rating system should render properly', () => {
    expect(wrapper.find('.ratings')).toBeTruthy();
  });
  it('colored stars should render', () => {
    expect(wrapper.find('span.checked')).toHaveLength(5);
  });
  it('empty stars should render', () => {
    expect(wrapper.find('span.fa-star')).toHaveLength(10);
  });
  it('fillStar() should fill partial stars correctly', () => {
    expect(wrapper.find('#fill-star').prop('style')).toHaveProperty('width', '40%');
  });
});

describe('Testing ReviewList component', () => {
  const wrapper = mount(<ReviewList reviews={reviews}/>);
  it('Review item should render', () => {
    expect(wrapper.contains(<Review key={reviews[0].Username} review={reviews[0]}/>)).toBeTruthy();
  });
  it('ReviewList should render', () => {
    expect(wrapper.find('.review-list')).toBeDefined();
  })
  it('ReviewList should render every item', () => {
    expect(wrapper.find('.review')).toHaveLength(reviews.length);
  });
});

describe('Testing Review component', () => {
  const review = reviews[0];
  const wrapper = mount(<Review key={review.Username} review={review} />);
  it('Review item should render properly', () => {
    expect(wrapper.find('.review')).toBeTruthy();
  });
  it('Review should have a rating', () => {
    expect(wrapper.contains(<Rating stars={review.Mooz} />)).toBeTruthy();
  });
  it('Review should display correct title', () => {
    expect(wrapper.find('.review-title')).toBeTruthy();
  });
  it('Review should contain correct username', () => {
    expect(wrapper.find('.review-username')).toBeTruthy();
  });
  it('Review should contain review text', () => {
    expect(wrapper.find('.review-text')).toBeTruthy();
  });
});