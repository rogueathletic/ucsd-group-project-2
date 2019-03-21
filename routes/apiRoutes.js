var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
//API CALL FIRST

// GET search by year, make, model
//=======================================
//http://api.marketcheck.com/v1/search?api_key={your_api_key}&year=
//2014&make=ford&model=F-150&latitude=
//34.05&longitude=-118.24&radius=10000&car_type=used&start=0&rows=10
//========================================
// GET search by year, make, model, trim EXAMPLE BELOW
//=======================================================
//http://api.marketcheck.com/v1/search?api_key={your_api_key}&year=
//2015&make=ford&model=Edge&trim=SEAWD&latitude=34.05&longitude=-118.24&radius=30&car_type=used&start=0&rows=10API key:LoNkDFmzAtqgA6OZW7QGT
//=========================================================
// GET search by condition example (New/Used/Certified) Example
//===========================================================
//http://api.marketcheck.com/v1/search?api_key={your_api_key}&car_type=used&latitude=
//34.05&longitude=-118.24&radius=5&start=0&rows=10
//================================================
//Search by city, state, zip
//================================
//http://api.marketcheck.com/v1/search?api_key={your_api_key}&make=ford&car_type=used&city=
//Los Angeles&zip=90001&start=0&rows=10
//=================================
// function buildQueryURL() {
//     // queryURL is the url we'll use to query the API
//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

//     // Begin building an object to contain our API call's query parameters
//     // Set the API key
//     var queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };

//     // Grab text the user typed into the search input, add to the queryParams object
//     queryParams.q = $("#search-term")
//       .val()
//       .trim();

//     // If the user provides a startYear, include it in the queryParams object
//     var startYear = $("#start-year")
//       .val()
//       .trim();

//     if (parseInt(startYear)) {
//       queryParams.begin_date = startYear + "0101";
//     }

//     // If the user provides an endYear, include it in the queryParams object
//     var endYear = $("#end-year")
//       .val()
//       .trim();

//     if (parseInt(endYear)) {
//       queryParams.end_date = endYear + "0101";
//     }

//     // Logging the URL so we have access to it for troubleshooting
//     console.log("---------------\nURL: " + queryURL + "\n---------------");
//     console.log("Query: " + queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
//   }