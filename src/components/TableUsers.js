import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  margin: 48px auto 0;
  border-radius: 5px;
  font-family: Quicksand, arial, sans-serif;
  width: calc(100% - 20px);
  max-width: 1000px;
`;

const Table = styled.table`
  background: #ffffff;
  border-color: transparent;
  border-spacing: 0;

  > thead {
    & th {
      background: #fafafa;
      border-bottom: 1px solid #f0f0f0;
      font-size: 19px;
      font-weight: bold;
      padding: 16px;
      overflow-wrap: break-word;
      //text-transform: capitalize;
    }
  }
  > tbody {
    > tr {
      :hover {
        background-color: #fafafa;
      }

      > td {
        position: relative;
        padding: 15px;
        overflow-wrap: break-word;
        text-align: center;
        font-size: 18px;
        width: 25%;
        border-bottom: 1px solid #f0f0f0;
      }

      &:last-child {
        > td {
          border: none;
        }
      }
    }
  }

  > tfoot {
    padding: 16px;
    color: rgba(0, 0, 0, 0.85);
    background: #fafafa;
  }
`;

const TableUsers = ({ data }) => {
  if (!data.length) {
    return null;
  }

  const headCols = () => {
    const [obj] = data;

    const headCols = Object.keys(obj).map(title => <th key={title}>{title}</th>);
    return headCols;
  };

  const TableHead = <tr>{headCols()}</tr>;

  const tableBody = data.map(obj => {
    const bodyCols = Object.keys(obj).map(key => <td key={obj[key]}>{obj[key]}</td>);
    const key = Math.random();
    return <tr key={key}>{bodyCols}</tr>;
  });

  return (
    <Container>
      <Table>
        <thead>{TableHead}</thead>
        <tbody>{tableBody}</tbody>
      </Table>
    </Container>
  );
};

TableUsers.defaultProps = {
  data: [],
};

export default TableUsers;
export { TableUsers };
