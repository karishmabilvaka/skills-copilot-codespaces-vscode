```
// Create web server
```
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.status(201).json(req.body);
});

app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});