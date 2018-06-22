var express = require('express');
var path = require('path');
const app = express();

app.use(express.static('scripts'));
app.use(express.static('styles'));
app.use

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/contact-us.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../contact-us.html'));
});

app.get('/actual-flashcard.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../actual-flashcard.html'));
});

app.get('/careers.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../careers.html'));
});

app.get('/create.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../create.html'));
});

app.listen(5090);
