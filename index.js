const express = require('express');
const fs = require('fs');
const app = express();

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




app.listen(3000, () => {
  console.log('Server is running on port 3000')
});
