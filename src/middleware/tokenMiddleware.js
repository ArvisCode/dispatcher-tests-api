const jwt = require("jsonwebtoken");
const { createError } = require("../helpers");
const { JWT_SECRET_KEY } = process.env;

const tokenMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw createError(401, "Your token is not validate, login please");
    }

    const tokenDecoder = jwt.verify(token, JWT_SECRET_KEY);
    req.userId = tokenDecoder.id;
    req.token = token;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenMiddleware;
