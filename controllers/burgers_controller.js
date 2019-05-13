var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// get route
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    // wrapper for orm.js that using MySQL query callback will return data, render to index with handlebar
    res.render("index", hbsObject);
  });
});
//*************************************************/
// post route -> back to index
router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
      // wrapper for orm.js that using MySQL insert callback will return a log to console,
      // render back to index with handle
      console.log(result);
      res.redirect("/");
    });
  });
//***************************************** */
// put route -> back to index
router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
      console.log(result);
      // Send back response and let page reload from .then in Ajax
      res.sendStatus(200);
    });
  });
  
// Export routes for server.js to use.
module.exports = router;

