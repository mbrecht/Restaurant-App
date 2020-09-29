import React from 'react';
import Filter from '../src/components/Filter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial testing', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Filter />))

  test('Should contain a filter component', () => {
    expect(wrapper.find('#filter').exists()).toBe(true);
  })
})