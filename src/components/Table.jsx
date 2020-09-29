import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableBody,
  TR,
  TH,
  TD,
  FirstButton,
  PrevButton,
  NextButton,
  LastButton
} from './TableComponents.jsx';

const Table = ({ restaurants }) => {
  const keys = ['name', 'city', 'state', 'telephone', 'genre'];

  const filterByKeys = (restaurant) => (
    Object
      // keys are inherited through closure
      .keys(restaurant)
      .filter(key => keys.includes(key))
      .reduce((obj, key) => {
        obj[key] = restaurant[key];
        return obj;
      }, {})
  )

  const sortByName = (a, b) => {
    if(a.name < b.name) return -1;
    if(b.name < a.name) return 1;
    return 0;
  }

  const renderRow = (restaurant, i) => (
    <TR key={i}>
      {
        keys.map((key, j) => <TD key={j}>{restaurant[key]}</TD>)
      }
    </TR>
  )

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);

  const lastPage = Math.floor(restaurants.length / 10);

  const handleClick = (e, targetPage) => {
    e.preventDefault();

    targetPage < 0 ? targetPage = 0 : null;
    targetPage > lastPage ? targetPage = lastPage : null;

    setPage(targetPage);
  }

  return (
    <TableContainer className="table">
      <StyledTable>
        <TableHead className="table-head">
          <TR>
            {
              keys.map((keyName, i) => <TH key={i}>{keyName}</TH>)
            }
          </TR>
        </TableHead>
        <TableBody className="table-body">
          {
            restaurants
              .map(filterByKeys)
              .sort(sortByName)
              .slice(page * count, page * count + count)
              .map(renderRow)
          }
        </TableBody>
      </StyledTable>
      <FirstButton onClick={e => handleClick(e, 0)} />
      <PrevButton onClick={e => handleClick(e, page - 1)} />
      <NextButton onClick={e => handleClick(e, page + 1)} />
      <LastButton onClick={e => handleClick(e, lastPage)} />
    </TableContainer>
  )
}

export default Table;
