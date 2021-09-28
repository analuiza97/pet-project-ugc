import React, { useState, useEffect } from 'react';
import Template from '../../components/Template';
import Loading from '../../components/Loading';
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

  const Content = loading ? <Loading /> : <TableUsers data={users} />

  return <Template>{Content}</Template>;
}

export default Home;
