const userschema = require("../model/userSchema");

const getinfo = async (req, res, next) => {
  try {
    const rollnumber = req.params.rollnumber;

    // Log the rollnumber for debugging
    console.log("Requested rollnumber:", rollnumber);

    const user = await userschema.findOne({ rollnumber: rollnumber });

    // Log the result of the findOne query for debugging
    console.log("User found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error:", err.message);
    next(err);
  }
};

module.exports = getinfo;
