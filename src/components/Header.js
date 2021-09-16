import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
  //background: #F80032;
  //background: #000080;
  background: #2c2c2c;
`;

const Text = styled.h1`
  font-family: 'VT323', monospace;
  font-size: 60px;
  color: white;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = () =>
    <PageHeader>
        <Text>PET Project Estágio Tech 2021</Text>
    </PageHeader>

export default Header;
