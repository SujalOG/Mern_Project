const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose'); // You can remove this line if mongoose is not used

dotenv.config();

const app = express();

require('./db/conn');
// const User = require('./models/userSchema');

app.use(express.json());

// Define middleware before using it in routes
const middleware = (req, res, next) => {
  console.log('Hello Middleware!');
  next();
};

app.use(require('./router/auth'));

app.get('/', (req, res) => {
  res.send('Hello world from server');
});

// Use the middleware for the '/about' route
app.get('/about', middleware, (req, res) => {
  res.send('Hello world from Aboutme');
});

app.get('/contact', (req, res) => {
  res.cookie("Test",'sujal');
  res.send('Hello world from Contact');
});

app.get('/login', (req, res) => {
  res.send('Hello world from login');
});

app.get('/signup', (req, res) => {
  res.send('Hello world from register');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
