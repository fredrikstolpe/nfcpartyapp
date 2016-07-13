var GenericResponse = require('../models/genericResponse');

module.exports = function(err, req, res, next) {
  console.log(err);
  
  var response = new GenericResponse(false, err, null);
  
  res.status(err.status || 500);

  // Res format sends HTML or json depending on Accept header
  res.format({
    html: function(){
      res.render('error', response);
    },
    json: function(){
      res.json(response);
    }
  });
};