const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    true_answer: {
      type: String,
      required: [true, "True_answer is required"],
    },
    false_answer_1: {
      type: String,
      required: [true, "False_answer_1 is required"],
    },
    false_answer_2: {
      type: String,
      required: [true, "False_answer_2 is required"],
    },
    false_answer_3: {
      type: String,
      required: [true, "False_answer_3 is required"],
    },
    score_true: {
      type: Number,
      default: 0,
    },
    score_false: {
      type: Number,
      default: 0,
    },
    answerers: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = model("question", schema);
