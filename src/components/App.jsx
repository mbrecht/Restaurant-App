import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Table from './Table.jsx';

const AppContainer = styled.div``

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(new Array(3).fill(0).map((val, i) => ({
      name: i,
      city: i,
      state: i,
      telephone: i,
      genre: i,
      error: "Houston, we've got a problem"
    })))
  }, [])

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
