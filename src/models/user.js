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
      enum: ["operator", "dispatcher"],
      default: "dispatcher",
    },
    token: {
      type: String,
      default: "",
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
    timestamps: true,
  }
);

module.exports = model("user", schema);
