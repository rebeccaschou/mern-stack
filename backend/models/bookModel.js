const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    loaned: {
      type: Boolean,
      default: false,
      // required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
