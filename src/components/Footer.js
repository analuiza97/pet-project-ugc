import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  height: 30px;
  justify-content: space-between;
`;

const Workplace = styled.img`
  height: 30px;
`;

const Americanas = styled.img`
  height: 30px;
`;

const Footer = () => (
  <FooterContainer>
    <a href="https://b2wdigital.workplace.com" target="_blank" rel="noopener noreferrer">
      <Workplace src='./images/workplace-logo.svg' alt="Workplace logo" />
    </a>
      <Americanas src='./images/logotype-americanas.svg' alt="Americanas s.a. logo" />
  </FooterContainer>
);

export default Footer;
