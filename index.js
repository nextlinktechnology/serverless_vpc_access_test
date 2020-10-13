var mysql = require("mysql");

var con = mysql.createConnection({
  host: "10.146.0.2",
  port: "3306",
  user: "root",
  password: "root",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
