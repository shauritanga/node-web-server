const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURL;

const app = express();


// Connecting to the database
mongoose.set('useCreateIndex', true);
mongoose.connect(db, {useNewUrlParser: true})
        .then(() => console.log('Connected!'))
        .catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARE 2
//MIDDLEWARE 3


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    path: '/'
  });
});


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    path: '/about'
  });
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Sign Up',
    path: '/register'
  })
});

app.post('/register', async (req, res) => {
  const user = new User({
  
  });
 
});

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login',
    path: '/login'
  });
});

// Routes to handle unknwon!
app.use((req, res, next) => {
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
})

// Error handler
//define last callback
app.use((req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
