var fs = require("fs");
var json_dir = __dirname + "/json/";

module.exports = {
  getListUser: function(callback) {
    fs.readFile(json_dir + "users.json", 'utf8', function(err, data) {
      console.log(data);
      callback(data);
    });
  },
  addUser: function(callback) {
    var user = {
      "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
      }
    };
    fs.readFile(json_dir + "users.json", 'utf8', function(err, data) {
      data = JSON.parse(data);
      data["user4"] = user["user4"];
      fs.writeFile(json_dir + "users.json", JSON.stringify(data),
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
      console.log(data);
      callback(JSON.stringify(data));
    });
  },
  getUserById: function(userID, callback) {
    // First read existing users.
    fs.readFile(json_dir + "users.json", 'utf8', function(err, data) {
      users = JSON.parse(data);
      var user = users["user" + userID]
      console.log(user);
      callback(JSON.stringify(user));
    });
  },
  deleteUser: function(userID, callback) {
    // First read existing users.
    fs.readFile(json_dir + "users.json", 'utf8', function(err, data) {
      data = JSON.parse(data);
      delete data["user" + userID];
      data = JSON.stringify(data);
      fs.writeFile(json_dir + "users.json", data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
      console.log(data);
      callback(data);
    });
  }
};
