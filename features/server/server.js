var express = require('express');
var app = express();
var user = require('./user.js');

//  List user
app.get('/listUsers', function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  user.getListUser(function (data) {
    res.end(data);
  });
})

// Add user
app.post('/addUser', function (req, res) {
  res.writeHead(201, {
    "Content-Type": "application/json"
  });
  // First read existing users.
  user.addUser(function (data) {
    res.end(data);
  });
})

// Detail
app.get('/getUser/:id', function (req, res) {
  user.getUserById(req.params.id, function (data) {
    var status = (data) ? 200 : 404;
    res.writeHead(status, {
      "Content-Type": "application/json"
    });
    res.end(data);
  });
})

// Delete user
app.delete('/deleteUser/:id', function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  user.deleteUser(req.params.id, function (data) {
    res.end(data);
  });
})

// Server config
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
