const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        message : error.message
    })
  }
};

module.exports = getUsers;
