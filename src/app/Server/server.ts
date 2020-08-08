const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 4200;

const database = mongoose.connect('http://localhost:4200', (err, response) => {
  if (err){console.log(err); }
  else{console.log('Connected to' + database + ' ' + response); }
});

const app = express();

app.use(bodyParser());
app.use(bodyParser.json({limit: '7mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Orgin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});


let schema = mongoose.Schema;

app.post()
