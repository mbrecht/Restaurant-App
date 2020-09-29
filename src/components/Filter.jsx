import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div``

const FilterOption = styled.div``

const Label = styled.label``

const Select = styled.select``

const Option = styled.option``

const Filter = ({ restaurants, updateRestaurants }) => {

  const states = [...new Set(restaurants.map(({ state }) => state))]
  
  return (
    <FilterContainer>
      <FilterOption>
        <Label htmlFor="states">Pick a State</Label>
        <Select name="states">
          {
            states.map(state => <Option value={state}>{state}</Option>)
          }
        </Select>
      </FilterOption>
    </FilterContainer>
  )
};

export default Filter;
