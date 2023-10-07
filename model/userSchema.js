const mongoose = require("mongoose");
  const userSchema = mongoose.Schema({
    userName: {
      type: String,
      required: [true, 'a tour must have names'],
      unique: true
      
    },
    rollnumber: {
      type: Number,
      required: [true, 'a tour must have roll number'],
      unique: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    english:
    {
      type: Number,
      required: [true, 'a student must have  englishmarks'],
    },
    maths:
    {
      type: Number,
      required: [true, 'a student must have maths marks'],
    },
    hindi:
    {
      type: Number,
      required: [true, 'a student must have marks'],
    }

  });
module.exports = mongoose.model("users", userSchema);

