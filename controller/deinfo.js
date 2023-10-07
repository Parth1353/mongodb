const userschema = require("../model/userSchema");

const deinfo = async (req, res, next) => {
  try {
    const userName = req.params.userName; 


    const deletedUser = await userschema.findOneAndDelete({ userName: userName });
    if (!deletedUser) {
     
      return res.status(404).json({ message: 'User not found' });
    }

   
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = deinfo;
