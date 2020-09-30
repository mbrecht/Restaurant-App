import React, { useState } from 'react';
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableBody,
  TR,
  TH,
  TD,
  Button
} from './Components.jsx';

const Table = ({ restaurants }) => {
  const keys = ['name', 'city', 'state', 'telephone', 'genre'];

  const filterByKeys = (restaurant) => (
    Object
      .keys(restaurant)                   // Pull out all keys to filter
      .filter(key => keys.includes(key))  // Keep only keys needed for table
      .reduce((obj, key) => {             // Return a cleaned version of the original 
        obj[key] = restaurant[key];       // restaurant object
        return obj;
      }, {})
  )

  const sortByName = (a, b) => {
    if(a.name < b.name) return -1;
    if(b.name < a.name) return 1;
    return 0;
  }

  // This adds a space between each genre to improve readability
  const cleanGenres = (restaurant) => {
    restaurant.genre = restaurant.genre.split(',').join(', ')
    return restaurant;
  }

  // Rendering functions
  const renderRow = (restaurant, i) => (
    <TR className="table-data" key={i}>
      { keys.map((key, j) => <TD key={j}>{restaurant[key]}</TD>) }
    </TR>
  )
  
  const renderHeader = (keyName, i) => (<TH className="header-item" key={i}>{keyName}</TH>)

  // State used to track pagination
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);

  const lastPage = Math.floor(restaurants.length / 10); // Useful to know what the last page is for pagination

  const handleClick = (e, targetPage) => {
    e.preventDefault();

    targetPage < 0 ? targetPage = 0 : null; // Prevents from trying to access pages below 0
    targetPage > lastPage ? targetPage = lastPage : null; // Prevents from trying to access pages beyond the last page 

    setPage(targetPage);
  }

  return (
    <TableContainer className="table">
      <StyledTable>
        <TableHead className="table-head">
          <TR className="table-header">
            { 
              keys.map(renderHeader) 
            }
          </TR>
        </TableHead>
        <TableBody className="table-body">
          {
            restaurants
              .map(filterByKeys)  // Make sure to only keep needed keys; no extra data
              .sort(sortByName)   // Everything should be in alphabetical order
              .slice(page * count, page * count + count) // Pagination
              .map(cleanGenres)   // Puts a space between genres to improve presentation
              .map(renderRow)     // Creates each row element
          }
        </TableBody>
      </StyledTable>
      <Button onClick={e => handleClick(e, 0)}>&lt;&lt; First</Button>
      <Button onClick={e => handleClick(e, page - 1)}>&lt; Previous</Button>
      <Button onClick={e => handleClick(e, page + 1)}>Next &gt;</Button>
      <Button onClick={e => handleClick(e, lastPage)}>Last &gt;&gt;</Button>
    </TableContainer>
  )
}

export default Table;
