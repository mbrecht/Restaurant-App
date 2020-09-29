import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from './Table.jsx';
import Filter from './Filter.jsx';

const AppContainer = styled.div``

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getRestaurantData = () => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants?sort=name', {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt"
      }
    })
      .then(res => res.json())
      .then(data => setRestaurants(data))
  }

  useEffect(() => getRestaurantData(), []);

  return (
    restaurants.length > 0
    ?
    <AppContainer id="app">
      <Filter 
        restaurants={restaurants}
        updateRestaurants={filtered => setFilteredRestaurants(filtered)} 
      />
      <Table restaurants={filteredRestaurants || restaurants} />
    </AppContainer>
    :
    null
  )
};

export default App;
