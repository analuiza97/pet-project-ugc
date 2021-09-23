import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Template from '../../components/Template';
import TableUsers from '../../components/TableUsers';
import useMock from '../../hooks/useMock';

const LoadingWrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const { data, error, loading } = useMock();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (error) {
      return console.error('logs error service', error);
    }
    return console.log('logs data service', { data, error, loading });
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (error) {
    return null;
  }

  const Loading = styled.img``;

  const Content = loading ? (
    <LoadingWrapper>
      <Loading src="./images/preloader.gif" alt="loading" />
    </LoadingWrapper>
  ) : (
    <TableUsers data={users} />
  );

  return <Template>{Content}</Template>;
}

export default Home;
