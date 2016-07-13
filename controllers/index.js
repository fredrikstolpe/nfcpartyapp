var express = require('express'),
  router = express.Router();

module.exports = function() {

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router;
}


