import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  p {
    margin: 0;
  };
`;

const Footer = () => {
 return (
  <FooterBar>
   <p>Powered by Newsapi.org</p>
   <p>© 2020</p>
  </FooterBar>
 );
};

export default Footer;