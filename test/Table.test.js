import React from 'react';
import Table from '../src/components/Table';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial testing', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Table restaurants={[]}/>))

  test('Should contain an table component', () => {
    expect(wrapper.find('.table').exists()).toBe(true);
  })
})