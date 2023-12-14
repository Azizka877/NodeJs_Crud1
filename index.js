const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const homeRoute = require('./routes/home');

const app = express()

const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/Node_js_crud');
const db = mongoose.connection;
db.on('error',()=>console.log('something went wrong'));
db.once('open', ()=>{
  console.log('Db connection succeed');
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





//Routing
app.use('/', homeRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})