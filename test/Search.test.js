import React from 'react';
import Search from '../src/components/Search';
import restaurants from './restaurants.json';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Ensure all elements are rendering', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Search restaurants={restaurants}/>))

  test('Should contain an input element', () => {
    expect(wrapper.find('.search-input').exists()).toBe(true);
  })

  test('Should contain a search button', () => {
    expect(wrapper.find('.search-button').exists()).toBe(true);
  })

  test('Button should indicate what it does', () => {
    expect(wrapper.find('.search-button').text()).toBe('Search');
  })
})
