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

  --primary: #422790;
  --light: #9c94f0eb;
  --lightest: #9c94f091;
`

// Filter Components
export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  flex-basis: 50%;
  margin-bottom: 1em;
`

export const FilterOption = styled.div`
  margin-left: 1em;
  display: inline-block;
  vertical-align: top;
`

export const Select = styled.select`
  border: none;
  font-size: 1rem;

  background: white;
  border-width: 0;
  border-bottom: 3px solid #ccc;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`

export const Option = styled.option`
  border: none;
  font-size: 1rem;
`

// Search Components
export const Form = styled.form`
  display: flex;
  flex-basis: 50%;
  align-items: flex-end;
  margin: 1em 0;
`

export const Input = styled.input`
  margin-right: 1em;
  padding: 0.5em;
  font-size: 1rem;
  width: 50%;
  background: white;
  border-width: 0;
  border-bottom-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #ccc 70%,  rgba(0, 0, 0, 0)) 1;

  &:focus {
    outline: none;
    border-image: linear-gradient(to right, var(--primary), rgba(0, 0, 0, 0)) 1;
  }
`

export const Button = styled.button`
  background-color: var(--primary);
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
  font-size: 1rem;
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
    background-color: var(--lightest);
  }

  tr:nth-child(even) {
    background-color: var(--light);
  }

  position: relative;
  z-index: 0;
`

export const TR = styled.tr``

export const TH = styled.th``

export const TD = styled.td``
