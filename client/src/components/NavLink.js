import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SourceLink = styled.li`
 text-decoration: none;
 border-bottom-style: solid;
 border-bottom-width: 5px;
 border-bottom-color: ${({color}) => color};
 color: #000;
 font-size: 20px;
 padding: 0 15px 10px;
 cursor: pointer;
 transition: color 0.3s;
 &:hover {
  color: ${({color}) => color};
 };
 @media (max-width: 800px) {
  font-size: 15px;
  padding: 0 10px;
  white-space: nowrap;
 }; 
`;

const sourceName = {
 'google-news-ar': 'Google News',
 'la-gaceta': 'La Gaceta',
 'Infobae': 'Infobae',
 'La-Nacion': 'La Nacion'
};

const NavLink = ({ link, id, onClick, color }) => {
  
  const history = useHistory();
  
  const handleClick = e => {
    onClick(`/source=${e.target.id}`);
    history.push(link);
  };

 return (
  <SourceLink component={Link}
      history={history}
      id={id} 
      color={color} 
      onClick={handleClick}> 
  {sourceName[id]}
  </SourceLink>
 );
};

export default NavLink;