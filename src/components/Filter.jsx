import React, { useState, useEffect } from 'react';
import { FilterContainer, FilterChoice, Option, Label, Select } from './Components.jsx';

const Filter = ({ restaurants, updateRestaurants }) => {

  const [states, setStates] = useState([]);
  const [stateFilter, setStateFilter] = useState('');

  const [genres, setGenres] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');

  const updateFilter = (e, setFilter) => setFilter(e.target.value);

  const getStates = ({ state }) => state; // Cleans restaurant array to easily setStates
  const getGenres = ({ genre }) => genre.split(',') // Cleans restaurant array to pull out all genres
  
  // Grab all states only when data is first loaded
  useEffect(() => {
    // Sets will automatically remove all duplicates here, giving a clean list of unique values for each option
    setStates([...new Set(restaurants.map(getStates).sort())])
    setGenres([...new Set(restaurants.map(getGenres).flat().sort())])
  }, [])
  
  // Apply state and genre filters before sending back to main component
  const filterByState = ({ state }) => stateFilter ? state === stateFilter : true;
  const filterByGenre = ({ genre }) =>genreFilter ? genre.split(',').includes(genreFilter) : true;
  
  // Apply filters whenever the state or genre filter update or when restaurants updates
  useEffect(() => {
    const filtered = restaurants
      .filter(filterByGenre)
      .filter(filterByState)

    updateRestaurants(filtered);
  }, [stateFilter, genreFilter, restaurants])

  // Render Functions
  const renderOption = (value, i) => (<Option value={value} key={i}>{value}</Option>)

  const renderFilter = ({ name, data, update }, i) => (
    <FilterChoice className="filter-choice" key={i}>
      <Select name={name} onChange={e => updateFilter(e, update)}>
        {/* All Option */}
        <Option value="" className="capital">All {name}</Option>
        { data.map(renderOption) }
      </Select>
    </FilterChoice>
  )

  // Array of choices to map over
  // ToDo - make this programmatic instead of hardcoded
  const choices = [
    {
      name: 'states',
      data: states,
      update: setStates
    },
    {
      name: 'genres',
      data: genres,
      update: setGenres
    }
  ]
  
  return (
    <FilterContainer id="filter">
      { choices.map(renderFilter) }
    </FilterContainer>
  )
};

export default Filter;
