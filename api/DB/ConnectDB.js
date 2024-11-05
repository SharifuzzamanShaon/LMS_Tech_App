const { default: mongoose } = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STR);
  } catch (error) {
    console.log("Db connecton error");
  }
  // await mongoose.connect(process.env.DB_url);
};
