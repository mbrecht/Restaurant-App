import styled from 'styled-components';

export const TableContainer = styled.div`
  min-width: 75%;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 1.1rem;
  width: 100%;

  th, td {
    border: 1px solid black;
    padding: 0.5em;
  }
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
