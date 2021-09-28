import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #fff;
  width: calc(100% - 3%);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff0036;
  padding-left: 90px;
  font-size: .65rem;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;

  > p {
    margin: auto;
  }
  
  @media (max-width: 767.98px) {
    padding-left: 0px;
    
    &.open {
      padding-left: 90px;
    }
  }
`;

const Footer = ({ collapse }) => (
  <FooterContainer className={collapse ? 'open' : ''}>
    <p><b>© 2021 Americanas S.A.</b> Todos os direitos reservados.</p>
  </FooterContainer>
);

export default Footer;
