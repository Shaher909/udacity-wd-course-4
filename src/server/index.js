const dotenv = require("dotenv");
dotenv.config();

// Require the Aylien npm package
var aylien = require("aylien_textapi");
var AylienNewsApi = require("aylien-news-api");
var defaultClient = AylienNewsApi.ApiClient.instance;
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Aylien setup & Variables for url and api key
var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = process.env.API_ID;

var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY;

var apiInstance = new AylienNewsApi.DefaultApi();

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
    console.log("response code:" + res.statusCode);

    const arctilesInfo = await getNewsArticles("Musk", "2", "en");
    console.log(arctilesInfo);
    res.send(arctilesInfo);
  } catch (e) {
    console.log("try failed: ", e);
  }
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});

// function to analyse news arctile from API
const getNewsArticles = async (inputTitle, noOfStories, language) => {
  return new Promise((resolve, reject) => {
    const opts = {
      title: inputTitle,
      perPage: noOfStories,
      language: [language],
    };

    apiInstance.listStories(opts, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        const extractedInfo = data.stories.map((story) => ({
          title: story.title,
          source: story.source.name,
          permalink: story.links.permalink,
          hashtags: story.hashtags,
        }));
        resolve(extractedInfo);
      }
    });
  });
};
