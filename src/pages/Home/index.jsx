import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Template from '../../components/Template';
import TableUsers from '../../components/TableUsers';
import useMock from '../../hooks/useMock';

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

  const Content = loading ? <Loading src="./images/preloader.gif" alt="loading" /> : <TableUsers data={users} />;

  return <Template>{Content}</Template>;
}

export default Home;
