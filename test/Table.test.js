import React from 'react';
import Table from '../src/components/Table';
import restaurants from './restaurants.json';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Ensure all elements are rendered', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Table restaurants={restaurants}/>))

  test('Should contain a table-head', () => {
    expect(wrapper.find('.table-head').exists()).toBe(true);
  })

  test('Should contain a table-header', () => {
    expect(wrapper.find('.table-header').exists()).toBe(true);
  })

  test('Header should contain a list of keys', () => {
    const keys = ['name', 'city', 'state', 'telephone', 'genre'];
    const rows = wrapper.find('.header-item');

    rows.map((key, i) => {
      expect(key.text()).toBe(keys[i]);
    })
  })

  test('Should contain a table-body', () => {
    expect(wrapper.find('.table-body').exists()).toBe(true);
  })

  test('Body should contain multiple rows of data', () => {
    expect(wrapper.find('.table-data').length > 0).toBe(true);
  })
})
