import styled from 'styled-components';

export const TableContainer = styled.div`
  min-width: 75%;

  button {
    margin: 1em 0.5em;
    border: none;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
    min-height: 2em;
    min-width: 2em;
  }
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 1.1rem;
  width: 100%;

  th, td {
    border: 1px solid black;
    padding: 0.5em;
  }
  
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.34);
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TR = styled.tr``

export const TH = styled.th``

export const TD = styled.td``

export const FirstButton = styled.button`
  &:before {
    content: "<<";
  }
`

export const PrevButton = styled.button`
  &:before {
    content: "<";
  }
`

export const NextButton = styled.button`
  &:before {
    content: ">";
  }
`

export const LastButton = styled.button`
  &:before {
    content: ">>";
  }
`
