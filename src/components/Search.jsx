import React, { useState } from 'react';
import { Form, Input, Button } from './SearchComponents.jsx';

const Search = ({ restaurants, updateRestaurants }) => {
  const [search, setSearch] = useState('');

  const checkMatch = (entry) => entry.toLowerCase().includes(search.toLowerCase())

  const searchRestaurants = ({ name, city, genre }) => (
    checkMatch(name) | checkMatch(city) | checkMatch(genre)
  )

  const handleSubmit = e => {
    e.preventDefault();

    const filtered = restaurants.filter(searchRestaurants)
    updateRestaurants(filtered);
  }

  return (
    <Form className="search">
      <Input 
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Button 
        type="submit"
        onClick={e => handleSubmit(e)}
      >
        Submit
      </Button>
    </Form>
  )
}

export default Search;
