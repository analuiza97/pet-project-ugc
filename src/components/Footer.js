import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ContentContainer = styled.div`
  a {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Workplace = styled.img`
  height: 30px;
`;

const Americanas = styled.img`
  height: 70px;
  margin-left: 85%;
`;

const Footer = () => (
  <FooterContainer>
    <ContentContainer>
      <a href="https://b2wdigital.workplace.com" target="_blank" rel="noopener noreferrer">
        <Workplace src='./images/workplace-logo.svg' alt="Workplace logo" />
      </a>
        <Americanas src='./images/americanas.png' alt="Americanas s.a. logo" />
    </ContentContainer>
  </FooterContainer>
);

export default Footer;
