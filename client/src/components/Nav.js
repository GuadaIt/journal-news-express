import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import NavLink from './NavLink';
import styled from 'styled-components';

const NavBar = styled.nav`
 padding: 20px;
 width: auto;
 display: flex;
 height: 60px;
 justify-content: flex-start;
 align-items: center;
 a, a:visited {
   text-decoration: none;
   color: #000;
 };
 @media (max-width: 800px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  };
  h2 {
    font-size: 35px;
  };
`;

const LinksContainer = styled.ul`
 display: flex;
 list-style: none;
 margin-right: 30px;
`;

const Form = styled.form`
 width: 30%;
 input {
  width: 100%;
  padding: 5px;
  border: 1.5px solid #ccc;
 };
 @media (max-width: 800px) {
  width: 70%;
  text-align: center;
 };
`;

const Nav = ({ newsSearch }) => {

  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search=${searchInput}`);
    newsSearch(`/search=${searchInput}`);
  };
  
  const handleChange = e => {
    setSearchInput(e.target.value);
  };  

  const handleClick = () => {
    newsSearch('./home');
  };

  return (
    <NavBar>
      <Link to='/' onClick={handleClick}>
       <h2>JOURNAL NEWS</h2>
       </Link> 
      <LinksContainer>
        <NavLink link='./source=google-news-ar' id='google-news-ar' onClick={newsSearch} color='red'/>
        <NavLink link='./source=la-gaceta' id='la-gaceta' onClick={newsSearch} color='green'/>
        <NavLink link='./source=Infobae' id='Infobae' onClick={newsSearch} color='orange'/>
        <NavLink link='./source=La-Nacion' id='La-Nacion' onClick={newsSearch} color='blue'/>   
      </LinksContainer>
      <Form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Buscar..."/>
      </Form>
    </NavBar>
  );
};

export default Nav;