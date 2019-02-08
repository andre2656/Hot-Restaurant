var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/booked", function(req, res) {
    var name = reservation.name;
    return res.json(reservation);
  });

  app.post("/booked", function(req, res) {
    var newRequest = req.body;
    newRequest.routeName = newRequest.name.replace(/\s+/g, "").toLowerCase();
    reservation.push(newRequest);
    console.log(newRequest);
    res.json(newRequest);
  });

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
})
    