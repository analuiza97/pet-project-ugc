import React, { useState, useEffect } from 'react';
import Template from '../../components/Template';
import TableUsers from '../../components/TableUsers';
import useMock from '../../hooks/useMock';
import { PageBackground, ImgContainer, Loading } from './style';

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

  if (loading) {
    return (
      <ImgContainer>
        <Loading src="./images/preloader.gif" alt="loading" />
      </ImgContainer>
    );
  }

  if (error) {
    return null
  }

  return (
    <PageBackground>
      <Template>
        <TableUsers data={users}/>
      </Template>
    </PageBackground>
  );
}

export default Home;
