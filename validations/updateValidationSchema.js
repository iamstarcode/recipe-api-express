const Joi = require("joi");

const updateValidationSchema = Joi.object().keys({
  fullname: Joi.string().required().min(5),
  username: Joi.string().required().min(5),
});

module.exports = updateValidationSchema;
