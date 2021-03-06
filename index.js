const express = require('express');
const path = require('path');
const fs = require('fs');
const User = require('./models/users');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const db = require('./config/keys').mongoURL;
const admin = require('./contents/admin');
const port = process.env.PORT || 3000;

const app = express();


// Connecting to the database
mongoose.set('useCreateIndex', true);
mongoose.connect(db, {useNewUrlParser: true})
        .then(() => console.log('Connected!'))
        .catch(err => console.log(err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(fileUpload());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "athanas love coding",
  saveUninitialized: false
}))

/*====================================================================
        HOME ROUTE
  =====================================================================
 */
app.get('/', async (req, res) => {
  const totalUsers = await User.find().estimatedDocumentCount()
  res.render('home', {
    title: 'Home',
    total: totalUsers,
    path: '/'
  });
});


/*====================================================================
        GET ADMIN ROUTE
  =====================================================================
 */
app.get('/admin', (req, res) => {
  res.render('admin', {
    title: 'Administration',
    path: '/admin'
  });
});

/*====================================================================
        GET REGISTER ROUTE
  =====================================================================
 */
app.get('/register', (req, res) => {
  res.render('register', {
    title: 'Sign Up',
    path: '/register'
  })
});

/*====================================================================
        POST REGISTER ROUTE
  =====================================================================
 */
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
      path: '/'
    });
  });
} else {
  const err = new Error('All fields are required!');
      err.status = 400;
      return next(err);
  }
});

/*====================================================================
        GET USER LOGIN ROUTE
  =====================================================================
 */
app.get('/login', (req, res) => {
  res.render('login', {
    title: 'User Login',
    path: '/'
  });
});


/*====================================================================
        POST USER LOGIN ROUTE
  =====================================================================
 */
app.post('/login', (req, res, next) => {
  User.findOne({email: req.body.username}, (err, user) => {
    if(err) {
      return next(err);
    }
    if(!user) {
      const err = new Error(`No any record found registered with your email`);
      res.statusCode = 400;
      return next(err)
    }
    res.render('profile', {
      title:'User Profile',
      user: user,
      path: ''
    })
  })
})

app.post('/admin',  async (req, res, next) => {
        if(!req.body.username &&
           !req.body.password) {
                const err = new Error('Username and Password are required to login');
                return next(err);
        }
        if(req.body.username === admin.username && req.body.password === admin.password) {
        const users = await  User.find({}, 'firstName lastName region school email district phoneNumber').sort('region');
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
  console.log(`server is running on ${port} port`);
});
