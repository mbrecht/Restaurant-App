import React from 'react';
import Filter from '../src/components/Filter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Initial testing', () => {
  let wrapper;

  let restaurants = [{
    "id": "eccdd704-8f39-4587-b07f-25cdb4a0c259",
    "name": "Tony's",
    "address1": "3755 Richmond Ave",
    "city": "Houston",
    "state": "TX",
    "zip": "77046",
    "lat": "29.732121",
    "long": "-95.436021",
    "telephone": "(713) 622-6778",
    "tags": "Social,Food and Dining,Restaurants,Italian,Social,Food and Dining,Restaurants,Seafood,Social,Food and Dining,Restaurants,French",
    "website": "http://www.tonyshouston.com",
    "genre": "Italian,European,French,American,Contemporary",
    "hours": "Mon-Thu 11:00 AM-10:00 PM; Fri 11:00 AM-11:59 PM; Sat 6:00 PM-11:59 PM",
    "attire": "business casual"
}]

  beforeEach(() => wrapper = shallow(<Filter restaurants={restaurants} updateRestaurants={() => {}}/>))

  test('Should contain a filter component', () => {
    expect(wrapper.find('#filter').exists()).toBe(true);
  })
})