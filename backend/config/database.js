const mongoose = require("mongoose");
require("dotenv");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((e) => {
      console.log("DB connection failed");
      console.log(e.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
