const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});