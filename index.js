const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// MIDDLEWARE 2
//MIDDLEWARE 3


app.get('/', (req, res) => {
  res.render('home', {title: 'Home'});
});


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us'
  })
})




app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
