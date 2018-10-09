var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Courses.findAll().then(function(courses) {
    res.send(courses);
  });
});

module.exports = router;
