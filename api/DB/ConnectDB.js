const { default: mongoose } = require("mongoose");

exports.connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/LMS_tech');
    // await mongoose.connect(process.env.DB_url);

}