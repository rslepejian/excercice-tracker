const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  type: {
    type: String,
    trim: true
  },

  name: {
    type: String
  },
  duration: {
    type: Number
  },
  distance: {
    type: Number,
    default: null
  },
  weight: {
      type: Number,
      default: null
  },
  reps: {
      type: Number,
      default: null
  },
  sets : {
      type: Number,
      default: null
  }
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;