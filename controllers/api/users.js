var express = require('express'),
  router = express.Router(),
  validate = require('express-validation'),
  validation = require('../../validation/'),
  User = require('../../models/User'),
  GenericResponse = require('../../models/GenericResponse');

module.exports = function() {

  /**
   * List all users
   */
  router.get('/', function(req, res, next) {
    User.find({}, function(err, users) {
      if (err) next(err);
      else{
        res.send(new GenericResponse(true, null, users));
      }
    });
  });

  /**
   * Get single user
   */
  router.get('/:rfid', function(req, res, next) {
    User.findOne({ 'rfid': req.params.rfid }, function (err, user) {
      if (err) next(err);
      else{
        res.send(new GenericResponse(true, null, user));
      }
    });
  });

  /**
   * Create user
   */
  router.post('/', validate(validation.users.post), function(req, res, next) {
 
    try{
      var user = new User({
        rfid: req.body.rfid,
        userInfo: {
          firstName: req.body.userInfo.firstName,
          lastName: req.body.userInfo.lastName,
          email: req.body.userInfo.email
        },
        credits: {
          casinoCredits: 200,
          drinkTickets: 5
        }
      });
    }
    catch(err){
      next(err);
    }
    user.save(function(err, user) {
      if (err) next(err);
      else{
        res.send(new GenericResponse(true, null, user));
      }
    });
  });

  /**
   * Get user drink tickets
   */
  router.get('/:rfid/drinkTickets', function(req, res, next) {
    User.findOne({ 'rfid': req.params.rfid }, function (err, user) {
      if (err) next(err);
      else{
        res.send(new GenericResponse(true, null, { "drinkTickets" : user.credits.drinkTickets }));
      }
    });
  });

  /**
   * Set user drink tickets
   */
  router.put('/:rfid/drinkTickets', validate(validation.users.drinkTickets.post), function(req, res, next) {
    User.findOne({ 'rfid': req.params.rfid }, function (err, user) {
      if (err) next(err);
      else{
        user.credits.drinkTickets = req.body.drinkTickets;
        user.save(function(err, user) {
          if (err) next(err);
          else{
            res.send(new GenericResponse(true, null, { "drinkTickets" : user.credits.drinkTickets }));
          }
        });
      }
    });
  });

  // /**
  //  * Delete
  //  */
  // router.delete('/:id', function(req, res, next) {
  //   User.remove({_id: req.params.id}, function(err, user){
  //     if (err) next(err);
  //     else{
  //       res.send(new GenericResponse(true, null, user));
  //     }
  //   })
  // });

  return router;
}
