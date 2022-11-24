const Joi = require("joi");

const registerValidationSchema = Joi.object().keys({
  fullname: Joi.string().required().min(5),
  username: Joi.string().required().min(5),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(3),
});

module.exports = registerValidationSchema;
