import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const FooterContainer = styled.footer`
  position: fixed;
  background: transparent;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const GitHub = styled.img`
  height: 32px;
  ${media.lessThan('medium')`
  height: 20px`}
`;

const Americanas = styled.img`
  height: 20px;
  ${media.lessThan('medium')`
  height: 12px`}
`;

const Footer = () => (
  <FooterContainer>
    <a href="https://github.com/analuiza97/pet-project-ugc" target="_blank" rel="noopener noreferrer">
      <GitHub src="./images/github.png" alt="Github logo" />
    </a>
    <Americanas src="./images/americanas.svg" alt="Americanas s.a. logo" />
  </FooterContainer>
);

export default Footer;
