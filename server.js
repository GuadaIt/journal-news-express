const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const helmet = require('helmet');

require('dotenv').config();

app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/home', (req, res, next) => {
  request(
    `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${process.env.API_KEY}`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);
        const articles = parsedBody["articles"];
        res.send({articles});
      };
    }
  );
});

app.get('/search=:searchInput', (req, res) => {
  let searchInput = req.params.searchInput;
  request(
    `https://newsapi.org/v2/everything?language=es&q=${searchInput}&apiKey=${process.env.API_KEY}`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);
        const articles = parsedBody["articles"];
        res.send({articles});
      };
    }
  )
});

app.get('/source=:sourceName', (req, res) => {
  let sourceName = req.params.sourceName;
  request(
    `https://newsapi.org/v2/top-headlines?sources=${sourceName}&apiKey=${process.env.API_KEY}`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);
        const articles = parsedBody["articles"];
        res.send({articles});
      };
    }
  )
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));