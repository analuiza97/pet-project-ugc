import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import ErrorBoundary from './ErrorBoundary';
import Head from 'next/head';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 550px;
`;

const Content = styled.main`
  height: calc(100% - 30px);
  padding-left: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .3s ease;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 3%);
    height: 30px;
    background: #ff0036;
  }

  @media (max-width: 767.98px) {
    padding-left: 0px;

    &.menu-open {
      padding-left: 90px;
    }
  }
`;

function Template({ children, title }) {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleCollapse={toggleCollapse} collapse={collapse} />
      <Content className={collapse ? 'menu-open' : ''}>
        <Title />
        <ErrorBoundary>{children}</ErrorBoundary>
      </Content>
      <Footer collapse={collapse} />
    </Container>
  );
}

Template.defaultProps = {
  title: 'Tratamento de Error Boundaries',
  children: <></>,
};

export default Template;
