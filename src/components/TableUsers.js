import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  margin: 90px auto 0;
  border-radius: 5px;
  font-family: Quicksand, arial, sans-serif;
  width: calc(100% - 20px);
  max-width: 1000px;
  ${media.lessThan('medium')`
  overflow: scroll`}
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
      ${media.lessThan('medium')`
  font-size: 12px`}
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
        ${media.lessThan('medium')`
  font-size: 12px`}
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

  const tableBody = data.map(obj => {
    const bodyCols = Object.keys(obj).map(key => <td key={obj[key]}>{obj[key]}</td>);
    const key = Math.random();
    return <tr key={key}>{bodyCols}</tr>;
  });

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Prontuário</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Escritório BIT</th>
          </tr>
        </thead>
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
