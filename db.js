// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // load env variables

const connectDB = async () => {

    try {
        //await mongoose.connect(process.env.MONGO_URL_LOCAL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
};

module.exports = connectDB;