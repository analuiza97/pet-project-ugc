import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.div`
  overflow-x: scroll;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: calc(100% - 20px);
  max-width: 1000px;
  transition: all 200ms ease-in-out;
  /* ${media.lessThan('medium')`
  overflow: scroll`} */
`;

const Table = styled.table`
  background: #ffffff;
  border-color: transparent;
  border-spacing: 0;
  font-size: .8rem;
  width: 100%;
  
  > thead {
    & th {
      background: #fafafa;
      border-bottom: 1px solid #f0f0f0;
      /* font-size: 19px; */
      font-size: 1rem;
      font-weight: normal;
      padding: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* ${media.lessThan('medium')`
      font-size: 12px`} */
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* font-size: 18px; */
        /* width: 25%; */
        border-bottom: 1px solid #f0f0f0;
        /* ${media.lessThan('medium')`
        font-size: 12px`} */
      }

      &:last-child {
        > td {
          border: none;
        }
      }
    }
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
