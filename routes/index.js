const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home.jsx');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', (req, res) => {
  const home = React.createElement(Home);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
