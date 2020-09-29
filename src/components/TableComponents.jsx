import styled from 'styled-components';

export const TableContainer = styled.div`
  min-width: 75%;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 1.1rem;
  width: 100%;

  th, td {
    padding: 1em;
  }

  text-align: left;
  
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.34);
`

export const TableHead = styled.thead`
  background-color: #422790;
  color: #fafafa;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.74);
  position: relative;
  z-index: 1;
`

export const TableBody = styled.tbody`
  color: black;

  tr:nth-child(odd) {
    background-color: #9c94f091;
  }

  tr:nth-child(even) {
    background-color: #9c94f0eb;
  }

  position: relative;
  z-index: 0;
`

export const TR = styled.tr``

export const TH = styled.th``

export const TD = styled.td``

export const Button = styled.button`
  background-color: #422790;
  margin: 1em 0.5em;
  margin-left: 0;
  border: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  min-height: 2em;
  min-width: 2em;
  color: #fafafa;
  padding: 1em;
  font-weight: bold;
  font-size: 0.9em;
`
