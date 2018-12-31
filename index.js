const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURL;
const User = require('./models/users');
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
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    subjects: req.body.subjects,
    region: req.body.region,
    district: req.body.district,
    email: req.body.email
  });
  try{
      const result = await user.save();
      if(!result) return err;
      res.send(`<h4 style="background: teal, padding: 1em">Welcome, ${req.body.firstName} ${req.body.lastName}, you have successful registered. Login to contiue</h4>`);
      res.end();
  } catch (e) {
    res.send(`<h4 style="background: teal, padding: 1em">there is a problem ${req.body.firstName}, try again!</h4>`);
    res.end();

  }
});




app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
