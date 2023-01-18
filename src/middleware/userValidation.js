const Joi = require("joi");
const { createError } = require("../helpers");

const loginValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(6).max(50).required(),
      password: Joi.string().min(6).max(15).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, "JoiError. Missing required field");
    }
    next();
  } catch (error) {
    next(error);
  }
};

const signupValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(6).max(50).required(),
      password: Joi.string().min(6).max(15).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, "JoiError. Missing required field");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginValidation,
  signupValidation,
};
