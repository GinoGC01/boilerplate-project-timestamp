// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var dateFormat = require("./utils/dateformat.js");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.json()); //json express

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/date", (req, res) => {
  const { date } = req.body;

  const fecha = date ? new Date(date) : new Date(); //tipo de dato FECHA

  const newDate = dateFormat(fecha);

  res.json(newDate);
});

app.get("/api/:dateString?", (req, res) => {
  const { dateString } = req.params;

  // Si no se envía una fecha, usamos la fecha actual
  let date = dateString ? new Date(dateString) : new Date();

  // fecha válida
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  const newDate = dateFormat(date);
  res.json(newDate);
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
