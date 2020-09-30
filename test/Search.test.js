import React from 'react';
import Search from '../src/components/Search';
import restaurants from './restaurants.json';

import { configure, shallow, mount } from 'enzyme';
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

describe('Ensure search component finds correct results', () => {
  let wrapper;
  
  beforeEach(() => wrapper = mount(<Search restaurants={restaurants}/>))
  
  test('Should find Old Hickory Restaurant', () => {
    let result; // Used as placeholder for state in search component
    const updateRestaurants = (data) => result = data;
    wrapper = shallow(<Search restaurants={restaurants} updateRestaurants={data => updateRestaurants(data)} />)
    
    
    const name = 'old hickory';
    // Used to change search input to find the restaurant
    const change = {
      target: { value: name }
    }
    
    wrapper.find('.search-input').simulate('change', change)
    
    const e = { preventDefault: jest.fn() }; // simulate prevent default so test doesn't crash
    const button = wrapper.find('.search-button')
    
    button.simulate('click', e);

    console.log(result);

    expect(result[0].name).toBe('Old Hickory Steakhouse')
  })
})
