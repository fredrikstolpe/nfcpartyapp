var Joi = require('joi');

module.exports = {
  post: {
    body: {
      rfid: Joi.string().required(),
      userInfo: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required()
      }).required()
    }
  },
  drinkTickets: {
    post: {
      body: {
        drinkTickets: Joi.number().integer().required()
      }
    }
  }
};
