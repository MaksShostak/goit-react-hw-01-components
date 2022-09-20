import styled from 'styled-components';

export const Table = styled.table`
  border: 2px solid rgb(61, 58, 59);
  //   border-radius: 6px;
  border-collapse: collapse;
  //   border-spacing: 0;
  box-shadow: 6px 4px 4px 4px grey;
  margin-top: 20px;
  background-color: rgb(193, 186, 186);
  padding: 70px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  //   border-radius: 10px;
`;
export const TableTh = styled.th`
  padding: 30px;
  border: 1px solid white;
  background-color: rgb(163, 239, 240);
  border-bottom: 1px solid grey;
`;
export const TableTd = styled.td`
  padding: 30px;
  border: 1px solid grey;
`;
export const TableRow = styled.tr`
  background-color: white;
  text-align: center;

  :nth-child(2n) {
    background-color: lightgrey;
  }
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid grey;
`;
