const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isDate } = require("validator");
// target_date should be greater than today's day
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "It should contain minimum 4 characters"],
      maxlength: [30, "It should contain maximum 30 characters"],
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "It should contain minimum 10 characters"],
      maxlength: [100, "It should contain maximum 100 characters"],
    },
    target_date: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          const date = new Date(v);
          const CurDate = new Date();
          if (CurDate <= date) {
            return true;
          }
          return false;
        },
      },
    },
    status: {
      type: String,
      enum: ["Todo", "InProgress", "Done"],
      default: "Todo",
    },
  },

  { timestamps: true }
);
const user = mongoose.model("curd", userSchema);
module.exports = user;
