var axios = require("axios");
var os = require("os");

// var mysql = require("mysql");
// mysql -u root -pTaiwan2020! -h 10.146.0.2 -P3306
// var con = mysql.createConnection({
//   host: "10.146.0.2",
//   port: "3306",
//   user: "my-app-user",
//   password: "Taiwan2020!",
//   insecureAuth: true,
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var express = require("express");
var bodyParser = require("body-parser");

const expressApp = express().use(bodyParser.json());

expressApp.get("/test", (request, response) => {
  console.log("test");
  response.send('{"a":"b", "c":"d"}');
});

expressApp.get("/neg-test", (request, response) => {
  console.log("neg-test");
  response.send("neg-test");
});

expressApp.get("/", async (req, res) => {
  try {
    console.log(req.query);
    console.log(`Get from: ${req.query.server}`);

    var response = await axios({
      method: "get",
      url: req.query.server,
    });
    console.log("response");
    // console.log(response);

    res.send(response.data);
  } catch (ex) {
    console.log(`[ERROR]${ex}`);
    res.send(ex);
  }
});

expressApp.get("/getspecs", (req, res) => {
  try {
    let responseContent = {
      hostname: os.hostname(),
      type: os.type(),
      platform: os.platform(),
      arch: os.arch(),
      uptime: os.uptime(),
      nics: os.networkInterfaces(),
    };
    console.log("getspecs");
    res.send(JSON.stringify(responseContent));
    //res.send("xxx");
  } catch (ex) {
    console.log(`[ERROR]${ex}`);
    res.send(ex);
  }
  //   res.send("xxx");
});

expressApp.listen(8080); //  Cloud Run now only supports port 8080
console.log(`express server listening on port 8080...`);
