import React from 'react';
import App from '../src/components/App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial testing', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />))

  test('Should contain an app component', () => {
    expect(wrapper.find('#app').exists()).toBe(true);
  })
})