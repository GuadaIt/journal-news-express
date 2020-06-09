import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Footer from './Footer';

const Section = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-bottom: 30px;
`;

const CardsContainer = ({ newsArray }) => {
 return (
  <>
  <Section>
   {newsArray && newsArray.map((noticia, i) => <Card key={i} noticia={noticia}/>)}
  </Section>
  <Footer/>
  </>
 );
};  

export default CardsContainer;