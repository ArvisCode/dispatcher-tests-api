const { Schema, model } = require("mongoose");
const names = [];

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      enum: names,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    type: {
      type: String,
      enum: ["lord", "dispatcher"],
      default: "dispatcher",
    },
    token: {
      type: String,
      required: [true, "Verify token is required"],
    },
    score_tt_1: {
      type: Number,
      default: 0,
    },
    score_tt_2: {
      type: Number,
      default: 0,
    },
    score_tt_3: {
      type: Number,
      default: 0,
    },
    score_tt_4: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

module.exports = model("user", schema);
