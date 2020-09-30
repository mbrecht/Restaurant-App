import React from 'react';
import Filter from '../src/components/Filter';
import restaurants from './restaurants.json';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Basic rendering', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Filter restaurants={restaurants} updateRestaurants={() => {}}/>))

  test('Should contain a filter component', () => {
    expect(wrapper.find('#filter').exists()).toBe(true);
  })

  test('Should contain two filter choices', () => {
    expect(wrapper.find('.filter-choice').length).toBe(2);
  })
})