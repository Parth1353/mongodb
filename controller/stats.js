const userschema = require("../model/userSchema");

const getStats = async (req, res, next) => {
  try {
    const pipeline = [
      // Add your aggregation stages here
      {
        $group: {
          _id: null,
          count: { $sum: 1 }, // Total number of documents
          avgEnglish: { $avg: "$english" }, // Average English marks
          avgMaths: { $avg: "$maths" }, // Average Maths marks
          avgHindi: { $avg: "$hindi" }, // Average Hindi marks
        },
      },
    ];

    const results = await userschema.aggregate(pipeline);
    
    res.status(200).json({
      status: 'success',
      data: {
        stats: results
      }
    });
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};
module.exports = getStats;