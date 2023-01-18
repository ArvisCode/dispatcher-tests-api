const { isValidObjectId } = require("mongoose");
const { createError } = require("../helpers");

const isValidId = (req, res, next) => {
  try {
    const { id } = req.params;
    const result = isValidObjectId(id);
    if (!result) {
      throw createError(400, "Invalid id");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isValidId;
