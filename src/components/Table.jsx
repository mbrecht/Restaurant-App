import React from 'react';
import styled from 'styled-components';

const keys = ['name', 'city', 'state', 'telephone', 'genre'];

const TableContainer = styled.div``

const TableHead = styled.thead``

const TableBody = styled.tbody``

const TR = styled.tr``

const TH = styled.th``

const TD = styled.td``

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

const renderRow = (restaurant, i) => (
  <TR key={i}>
    {
      keys.map((key, j) => <TD key={j}>{restaurant[key]}</TD>)
    }
  </TR>
)

const Table = ({ restaurants }) => {

  return (
    <TableContainer className="table">
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
            .map(renderRow)
        }
      </TableBody>
    </TableContainer>
  )
}

export default Table;
