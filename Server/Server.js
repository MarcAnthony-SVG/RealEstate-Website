const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5001;
const request = require("request");
const { json } = require("express");
const router = express.Router();
const cors = require("cors");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const isDev = process.env.NODE_ENV !== "production";

app.use(express.json());
app.use(cors());
app.use(express.json());
// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);
   
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../Front_End/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('/*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../Front_End/build', 'index.html'));
  });
}
var options = {
  method: "GET",
  url:
    "https://realtor-canadian-real-estate.p.rapidapi.com/properties/list-residential",
  qs: {
    CurrentPage: "1", //REQUIRED
    RecordsPerPage: "10", // REQUIRED Number items returned per request, max 50
    LatitudeMin: "-22.26872153207163", // REQUIRED
    LatitudeMax: "81.14747595814636", // REQUIRED
    LongitudeMin: "-136.83037765324116", //REQUIRED
    LongitudeMax: "-10.267941690981388", // REQUIRED
    // SortBy: "1", // 1-Price($)|6-Date|11-Virtual Tour|12-Open Houses|13-More Photos
    // SortOrder: "A", //A - ascending | D - descending
    // BedRange: "0-0", //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
    // BathRange: "0-0", //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
    // RentMin: "0", // Filter by min price, applied when TransactionTypeId = 3
    // RentMax: undefined, // Filter by max price, applied when TransactionTypeId = 3
    // PriceMin: "0", // Filter by min price, applied when TransactionTypeId = 2
    // NumberOfDays: "0", //Listed since
    // CultureId: "1", // 1 - English|2 - French
    // ZoningTypeGroupId: undefined, // 1-Agricultural|2-Commercial Mixed|3-Commercial Office|4-Commercial Retail|5-Industrial|6-Industrial-Heavy|7-Industrial-Light|8-Industrial-Medium|9-Institutional|10-Other|11-Recreational|12-Residential-High Density|13-Residential-Low Density|14-Residential - Medium Density
    // ParkingTypeId: undefined, // 1-Attached garage|2-Integrated garage|3-Detached garage|4-Garage|5-Carport|6-Underground|7-Indoor|8-Open|9-Covered|10-Parking pad|11-Paved Yard|35-Boat House|36-Concrete|37-Heated Garage
    // OpenHouse: undefined, // false/true (not 0/1)
  },
  headers: {
    "x-rapidapi-host": "realtor-canadian-real-estate.p.rapidapi.com",
    "x-rapidapi-key": "76aed66272msh476cab0c52be894p1c453bjsna5695f5802e3",
    useQueryString: true,
  },
};

app.get("/api/properties/list-for-sale", (req, res) => {
  options.qs = req.query;
  request(options, function (error, response, body) {
    // const json = JSON.parse(body);
    console.log("API DATA:Body:Results", body.Results);
    console.log("API DATA: Body", body);
    res.send(body);
  });
  console.log("REQ", req.query);
});
// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(
    path.resolve(__dirname, "../Front_End/build", "index.html")
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.error(
    `Node ${
      isDev ? "dev server" : "cluster worker " + process.pid
    }: listening on port ${port}`
  );
});

module.exports = app;
/*
The challenges that I faced while I created this server was calling a web api for the first time
and sending that JSON data to my client. I solved this problem by creating a get request on line 36
and inclosing a request on line 37, which sends the request to the api on line 13 and once that is 
recieved put into a parsed JSON variable and send to the client on line 40. 
I would also like to note that we needed to require cors because while problem shooting we encountered a
problem where the server and client weren't talking to one anther and the client was sending a response to 
the wrong port. 
*/
