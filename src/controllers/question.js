const QuestionModel = require("../models/question");
const { createError } = require("../helpers");

class Question {
  async addNewQuestion(req, res, next) {
    try {
      const newQuestion = req.body;
      if (!newQuestion) {
        throw createError(400);
      }
      await QuestionModel.create({ ...newQuestion });
      return res
        .status(200)
        .json({ message: "status 201", response: newQuestion });
    } catch (error) {
      next(error);
    }
  }

  async getAllQuestion(req, res, next) {
    try {
      const allQuestion = await QuestionModel.find({});
      return res
        .status(200)
        .json({ message: "status 200", response: allQuestion });
    } catch (error) {
      return res.status(404).json({
        message: `Question not found`,
        response: null,
        error: error,
      });
    }
  }

  async updateQuestion(req, res, next) {
    try {
      const { _id } = req.body;
      const question = await QuestionModel.findByIdAndUpdate(_id, {
        ...req.body,
      });
      if (!question) {
        throw createError;
      }
      return res.status(200);
    } catch (error) {
      next(error);
    }
  }

  async removeQuestion(req, res, next) {
    try {
      const { _id } = req.body;
      const question = await QuestionModel.findOneAndRemove(_id);
      if (!question) {
        throw createError(404);
      }
      return res
        .status(200)
        .json({ message: "Status 200. Question was deleted." });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Question();
