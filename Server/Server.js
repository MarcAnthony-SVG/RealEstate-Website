const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const request = require("request");
const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

var options = {
  method: 'GET',
  url: 'https://realtor.p.rapidapi.com/properties/list-for-sale',
  qs: {
    sort: 'relevance',
    city: 'New York City',
    offset: '0',
    limit: '1',
    state_code: 'NY',
    price_min: undefined, //Change by user
    price_max: undefined, //Change by user
    sqft_min: undefined, //Change by user
    sqft_max: undefined, //Change by user
    baths_min: undefined, //Change by user
    baths_max: undefined,
  },
  headers: {
    'x-rapidapi-host': 'realtor.p.rapidapi.com',
    'x-rapidapi-key': '76aed66272msh476cab0c52be894p1c453bjsna5695f5802e3',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
  const json = JSON.parse(body);
  console.log(json);
  var data = response.json;
});

app.get("/api/data", (req, res) => {
  res.send( );
});


module.exports = app;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});