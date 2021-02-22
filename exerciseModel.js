const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
      sets: {
        type: Number,
        default: null
      }
    }
  ]
});

const Exercise = mongoose.model("Excercise", ExerciseSchema);

module.exports = Exercise;