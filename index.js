const express = require('express');
const path = require('path');
const fs = require('fs');
const User = require('./models/users');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURL;
const admin = require('./contents/admin');

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


app.get('/', async (req, res) => {
  const totalUsers = await User.find().estimatedDocumentCount()
  res.render('home', {
    title: 'Home',
    total: totalUsers,
    path: '/'
  });
});


app.get('/admin', (req, res) => {
  res.render('admin', {
    title: 'Administration',
    path: '/admin'
  });
});

app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Sign Up',
    path: '/register'
  })
});

app.post('/register', async (req, res, next) => {
  if(req.body.firstName &&
    req.body.lastName &&
    req.body.identification &&
    req.body.idNumber &&
    req.body.subjects &&
    req.body.region &&
    req.body.district &&
    req.body.schoolName &&
    req.body.phoneNumber &&
    req.body.email) {
      

     // creating user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        identify: req.body.identification,
        idNumber: req.body.idNumber,
        subjects: req.body.subjects,
        region: req.body.region,
        district: req.body.district,
        school: req.body.schoolName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
  });
  user.save(function(err, user){
    if (err) {
      const err = new Error('Data Not Submited, It seem that you have already registered.!');
      err.status = 400;
      next(err);
    }
    res.render('success', {
      title: 'Success',
      message: req.body.firstName + ' ' + req.body.lastName + ', you have successful registered to STAT!',
      path: '//*/'
    });
  });
} else {
  const err = new Error('All fields are required!');
      err.status = 400;
      return next(err);
  }
});

app.post('/login',  async (req, res, next) => {
        if(!req.body.username &&
           !req.body.password) {
                const err = new Error('Username and Password are required to login');
                return next(err);
        }
        if(req.body.username === admin.username && req.body.password === admin.password) {
        const users = await  User.find({}, 'firstName lastName region school email').sort('region');
//         User.find({}, 'firstName lastName region school', function(err, users) {
//                 if(err) return next(err);
//                 res.render('registered', {
//                    users
//                 });
//         });  
         res.render('registered', {
                 users
               });
        } else {
            const err = new Error('Invalid username or password');
                return next(err);
        }
});

// Routes to handle unknwon!
//Unknown routes
app.use(function(req, res, next) {
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

//Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    path: '//*/',
    message: err.message,
    error: {}
  });
});

app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
