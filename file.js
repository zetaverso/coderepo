const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const babyNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Oliver', 'Isabella', 'Elijah', 'Sophia', 'William'];

// Home route
app.get('/', (req, res) => {
  res.render('home');
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Baby Name Generator route
app.get('/baby-name', (req, res) => {
  const randomIndex = Math.floor(Math.random() * babyNames.length);
  const name = babyNames[randomIndex];
  res.render('baby-name', { name });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
