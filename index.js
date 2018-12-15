const express = require('express');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// MIDDLEWARE 2
app.use((req, res, next) => {
  res.render('test');
});
//MIDDLEWARE 3
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `At ${now} a peroson visited ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('visitors.log', log + '\n', err =>{
    if(err) return err;
  })
  next();
});


app.get('/', (req, res) => {
  res.send(index.html);
});


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us'
  })
})




app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
