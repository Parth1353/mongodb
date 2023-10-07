const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const name=require("../model/userSchema")
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
    console.log("connected now");
  } catch (err) {
    console.log(err.message);
  }
};
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/storedata.json`, 'utf-8')
  );
  const importData = async () => {
    try {
      await name.create(tours);
      console.log('Data successfully loaded!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  const deleteData = async () => {
    try {
      await name.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  
  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }