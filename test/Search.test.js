import React from 'react';
import Search from '../src/components/Search';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial testing', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Search restaurants={[]}/>))

  test('Should contain an search component', () => {
    expect(wrapper.find('.search').exists()).toBe(true);
  })
})