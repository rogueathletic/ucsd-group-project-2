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
// POST /signup
// - accept username, password
// - create a User record that has username and password
// - return the User id created as the response

// Singup Frontend JS
// - Makes a POST request to /signup, passes username and password
// - Receives created User id as response
// - Save User id in session storage, ex. sessionStorage.setItem('user_id', 3)

// Login Frontend JS
// - Make a POST request to /login, passes User id from session storage, ex sessionStorage.getItem('user_id'), and password
// - Receives response indicating if login was successful
// - If successful, set logged in status, ex. sessionStorage.setItem('is_logged_in', true)

// POST /login
// - accept User id, password
// - Lookup User by id from database
// - Check that User password matches request.body.password
// - If password matches, return response {login_success: true}, else {login_success: false}

// Rest of application frontend JS
// - Can check sessionStorage.getItem('is_logged_in') === true, if so then show logged in functionality