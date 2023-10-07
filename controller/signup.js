const userschema = require("../model/userSchema");

const signup = async (req, res, next) => {
  try {
    const user = await userschema.create({
      userName: req.body.userName,
      rollnumber: req.body.rollnumber,
      english: req.body.english,
      maths: req.body.maths,
      hindi: req.body.hindi,
      date: req.body.date,
    });
    return res.status(201).json(user);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = signup;
