const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { name, email, title, department, role, image } = req.body;

    if (!name || !email || !title || !department || !role) {
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });

    return res.status(201).json({
      status: 201,
      message: "User created succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = createUser;
