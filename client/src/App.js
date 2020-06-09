import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';

const App = () => {  

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/home')
    .then(res => res.json())
    .then(data => setNews(data.articles));
  }, []);

  const newsSearch = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => setNews(data.articles));
   };  
  
  return (
    <Router>
      <Nav newsSearch={newsSearch}/>             
      
      <Switch>
       <Route exact path='/' component={() => <CardsContainer newsArray={news}/>} />
       <Route exact path='/source=:sourceName' component={() => <CardsContainer newsArray={news}/>}/>
       <Route exact path='/search=:searchInput' component={() => <CardsContainer newsArray={news}/>}/>
      </Switch>
    </Router>
  );
}

export default App;