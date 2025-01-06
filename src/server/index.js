const dotenv = require("dotenv");
dotenv.config();

// Require the Aylien npm package
var aylien = require("aylien_textapi");
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
// You could call it aylienapi, or anything else
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const aylienStoriesApiUrl = "https://api.aylien.com/news/stories";

app.get("/", function (req, res) {
  res.send(
    "This is the server API page, you may access its services via the client app."
  );
});

// POST Route
app.post("/submit", async function (req, res) {
  const formData = {
    newsUrl: req.body.url,
  };

  try {
    //execute a function (ex: retrieve info from the API)
    console.log("Try is successful");
    res.send("Success");
  } catch (e) {
    console.log("try failed: ", e);
  }
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

// function to analyse news arctile from API
const analyzeNewsArticle = async (url) => {};
