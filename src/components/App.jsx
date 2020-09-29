import React, { useState, useEffect } from 'react';
import Table from './Table.jsx';
import Filter from './Filter.jsx';
import Search from './Search.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getRestaurantData = () => {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants?sort=name', {
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
    data.length > 0
    ?
    <AppContainer id="app">
      <Search 
        restaurants={data}
        updateRestaurants={search => setRestaurants(search)} 
      />
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
