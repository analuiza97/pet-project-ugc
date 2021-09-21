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

const GitHub = styled.img`
  height: 32px;
`;

const Americanas = styled.img`
  height: 20px;
`;

const Footer = () => (
  <FooterContainer>
    <a href="https://github.com/analuiza97/pet-project-ugc" target="_blank" rel="noopener noreferrer">
      <GitHub src="./images/github.png" alt="Github logo" />
    </a>
    <Americanas src="./images/logotype-americanas.svg" alt="Americanas s.a. logo" />
  </FooterContainer>
);

export default Footer;
