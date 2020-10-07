import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import Filter from './Filter.jsx';
import Search from './Search.jsx';
import { AppContainer } from './Components.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getRestaurantData = () => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt"
      }
    })
      .then(res => res.json())
      .then(data => {
        setFilteredRestaurants(data);
        setRestaurants(data);
        setData(data)
      })
  }

  useEffect(() => getRestaurantData(), []);

  return (
    <AppContainer id="app">
      <Search 
        restaurants={data}
        updateRestaurants={search => setRestaurants(search)} 
      />
      <Filter 
        restaurants={restaurants}
        updateRestaurants={filtered => setFilteredRestaurants(filtered)} 
      />
      <Table restaurants={[...filteredRestaurants]} />
    </AppContainer>
  )
};

export default App;
