import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import useMock from '../hooks/useMock';

const Container = styled.div`
  overflow: hidden;
  margin: 48px auto 0;
  margin-top: 7%;
  width: 80%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  & .ant-table-cell {
    text-align: center;
    font-size: 16px;
    width: 25%;
  }

  & .ant-table-thead .ant-table-cell {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const Loading = styled.img`
`;

const { Column } = Table;

export default function TableUsers() {
  const { data, error, loading } = useMock();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('logs data service', { data, error, loading });
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (loading) {
    return (
      <ImgContainer>
        <Loading src="./images/preloader.gif" alt="loading" />
      </ImgContainer>
    );
  }

  if (error) {
    return null;
  }

  return (
    <Container>
      <Table dataSource={users} pagination={false} size={'big'} footer={() => ''}>
        <Column title="Prontuário" dataIndex="prontuario" key="prontuario" align="center" />
        <Column title="Nome" dataIndex="nome" key="nome" align="center" />
        <Column title="E-mail" dataIndex="email" key="email" align="center" />
        <Column title="Escritório BIT" dataIndex="bit" key="bit" align="center" />
      </Table>
      {/* <span>{users[4].email}</span> */}
    </Container>
  );
}
