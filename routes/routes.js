const User = require('../models/users');
const express =require('express'),
      router = express.Router();


// Home route
router.get('/', (req, res, next) => {
    res.render('home', {title: 'Home', path: '/'});
});

//About route
router.get('/about', (req, res, next) => {
    res.render('about', {title: 'About Us', path: '/about'});
});

//Register route
router.get('/register', (req, res, next) => {
    res.render('register', {title: 'Sign Up', path: '/register'});
});

//Save to DB
router.post('/register', (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        subjects: req.body.subjects,
        region: req.body.region,
        district: req.body.district,
        school: req.body.schoolName,
        email: req.body.email
    });
    try{
        const result = await user.save();
        if(!result) return next(err);
        res.send(`<h4 style="background: teal, padding: 1em">Welcome, ${req.body.firstName} ${req.body.lastName}, you have successful registered. Login to contiue</h4>`);
        res.end();
    } catch (e) {
      res.send(`<h4 style="background: teal, padding: 1em">there is a problem ${req.body.firstName}, try again!</h4>`);
      res.end();
  
    }
});


module.exports = router;