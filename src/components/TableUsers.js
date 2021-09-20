import { Table } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  margin: 48px auto 0;
  margin-top: 7%;
  width: 80%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  & table {

    > thead {
      & .ant-table-cell {
        font-size: 18px;
        font-weight: bold;
      }
    }
  
    > tbody {
      & .ant-table-cell {
        text-align: center;
        font-size: 16px;
        width: 25%;
      }
    }
  }
`;


export default function TableUsers({ data }) {
  const { Column } = Table;
  return (
    <Container>
      <Table dataSource={data} pagination={false} size={'big'} footer={() => ''}>
        <Column title="Prontuário" dataIndex="prontuario" key="prontuario" align="center" />
        <Column title="Nome" dataIndex="nome" key="nome" align="center" />
        <Column title="E-mail" dataIndex="email" key="email" align="center" />
        <Column title="Escritório BIT" dataIndex="bit" key="bit" align="center" />
      </Table>
      {/* <span>{users[4].email}</span> */}
    </Container>
  );
}

TableUsers.defaultProps = {
  data: [],
}
