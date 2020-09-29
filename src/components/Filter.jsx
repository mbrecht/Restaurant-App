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

  const updateFilter = (e, setFilter) => setFilter(e.target.value);

  const filterByState = ({ state }) => stateFilter !== '' ? state === stateFilter : true;

  // Grab all states only when data is first loaded
  useEffect(() => setStates([...new Set(restaurants.map(({ state }) => state))]), [])

  useEffect(() => {
    const filtered = restaurants
      .filter(filterByState)

    updateRestaurants(filtered);
  }, [stateFilter])
  
  return (
    <FilterContainer>
      <FilterOption>
        <Label htmlFor="states">Pick a State</Label>
        <Select name="states" onChange={e => updateFilter(e, setStateFilter)}>
          {/* Blank option */}
          <Option value="">Filter By State</Option>
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
    </FilterContainer>
  )
};

export default Filter;
