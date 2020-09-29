import styled from 'styled-components';

// App Components
export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  width: 75%;
  margin: 0 auto;
`

// Filter Components
export const FilterContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-basis: 25%;
`

export const FilterOption = styled.div`
`

export const Label = styled.label`
  margin-right: 0.5em;
`

export const Select = styled.select`
  border: none;
  font-size: 1rem;
`

export const Option = styled.option`
  border: none;
  font-size: 1rem;
`

// Search Components
export const Form = styled.form`
  margin: 1em 0;
  flex-basis: 50%;
`

export const Input = styled.input`
  padding: 0.5em;
  font-size: 1rem;
  width: 50%;
  border: none;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  background-color: #422790;
  margin-top: 1em;
  margin-right: 0.5em;
  border: none;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  min-height: 2em;
  min-width: 2em;
  color: #fafafa;
  padding: 1em;
  font-weight: bold;
  font-size: 0.9em;
  
  &:focus {
    outline: none;
  }
`

// Table Components
export const TableContainer = styled.div`
  flex-basis: 100%;
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
