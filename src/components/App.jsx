import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from './Table.jsx';

const AppContainer = styled.div``

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

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
    <AppContainer id="app">
      {
        restaurants.length > 1
        ?
        <Table restaurants={restaurants} />
        :
        null
      }
    </AppContainer>
  )
};

export default App;
