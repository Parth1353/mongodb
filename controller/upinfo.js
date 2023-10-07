const userschema = require("../model/userSchema");

const upinfo = async (req, res, next) => {
  try {
    const userName = req.params.userName; 
    const updatedData = req.body; 
    const user = await userschema.findOneAndUpdate(
      { userName: userName },
      updatedData,
      { new: true } 
    );

    if (!user) {
    
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = upinfo;
