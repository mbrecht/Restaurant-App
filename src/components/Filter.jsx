import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div``

const FilterOption = styled.div``

const Label = styled.label``

const Select = styled.select``

const Option = styled.option``

const Filter = ({ restaurants, updateRestaurants }) => {

  const [states, setStates] = useState([]);
  const [stateFilter, setStateFilter] = useState('');

  const [genres, setGenres] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');

  const updateFilter = (e, setFilter) => setFilter(e.target.value);

  const filterByState = ({ state }) => stateFilter ? state === stateFilter : true;
  const filterByGenre = ({ genre }) =>genreFilter ? genre.split(',').includes(genreFilter) : true;

  const getStates = ({ state }) => state;
  const getGenres = ({ genre }) => genre.split(',')

  // Grab all states only when data is first loaded
  useEffect(() => {
    setStates([...new Set(restaurants.map(getStates))])
    setGenres([...new Set(restaurants.map(getGenres).flat())])
  }, [])

  useEffect(() => {
    const filtered = restaurants
      .filter(filterByGenre)
      .filter(filterByState)

    updateRestaurants(filtered);
  }, [stateFilter, genreFilter])
  
  return (
    <FilterContainer id="filter">
      <FilterOption>
        <Label htmlFor="states">Filter By State</Label>
        <Select name="states" onChange={e => updateFilter(e, setStateFilter)}>
          {/* Blank option */}
          <Option value="">All States</Option>
          {
            states.map((state, i) => (
              <Option 
                value={state}
                key={i}
              >
                {state}
              </Option>
            ))
          }
        </Select>
      </FilterOption>
      <FilterOption>
        <Label htmlFor="genres">Pick a Genre</Label>
        <Select name="states" onChange={e => updateFilter(e, setGenreFilter)}>
          {/* Blank option */}
          <Option value="">All Genres</Option>
          {
            genres.map((genre, i) => (
              <Option 
                value={genre}
                key={i}
              >
                {genre}
              </Option>
            ))
          }
        </Select>
      </FilterOption>
    </FilterContainer>
  )
};

export default Filter;
