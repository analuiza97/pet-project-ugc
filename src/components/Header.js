import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const PageHeader = styled.header`
  background: #2c2c2c;
  //width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${media.lessThan('medium')`
  height: initial;`}
  padding: 20px;
`;

const Text = styled.text`
  font-family: 'VT323', monospace;
  font-size: 60px;
  color: white;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 568px) {
    font-size: 25px;

  }
`;

const Header = () => (
  <PageHeader>
    <Text>PET Project Estágio Tech 2021</Text>
  </PageHeader>
);

export default Header;
