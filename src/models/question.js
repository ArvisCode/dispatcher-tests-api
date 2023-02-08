const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    answers: {
      type: Array,
      required: [true, "True_answer is required"],
    },
    index_true_answer: {
      type: Number,
      default: -1,
    },
    score_true: {
      type: Number,
      default: 0,
    },
    score_false: {
      type: Number,
      default: 0,
    },
    members: {
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
