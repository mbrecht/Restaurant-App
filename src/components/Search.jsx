import React, { useState } from 'react';
import { Form, Input, Button } from './Components.jsx';

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
        className="search-input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name, city, or genre"
      />
      <Button 
        className="search-button"
        type="submit"
        onClick={e => handleSubmit(e)}
      >
        Search
      </Button>
    </Form>
  )
}

export default Search;
