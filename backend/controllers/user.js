const bcrypt = require("bcrypt");

const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const User = require("../models/User");

exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success yes",
  });
};

exports.signUp = async (req, res) => {
  try {
    if (!validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "fail",
        error: "Email is invalid",
      });
    }

    if (!validateLength(req.body.first_name, 3, 30)) {
      return res.status(400).json({
        message: "fail",
        error: "First name must be between 3 and 30 characters",
      });
    }

    if (!validateLength(req.body.password, 8, 80)) {
      return res.status(400).json({
        message: "fail",
        error: "Password name must at least 8 characters",
      });
    }
    if (!validateLength(req.body.last_name, 3, 30)) {
      return res.status(400).json({
        message: "fail",
        error: "Last name must be between 3 and 30 characters",
      });
    }

    const password = await bcrypt.hash(req.body.password, 12);
    const username = await validateUsername(
      (req.body.first_name + req.body.last_name).toLowerCase()
    );
    const user = await User({ ...req.body, password, username }).save();
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      error,
    });
  }
};
