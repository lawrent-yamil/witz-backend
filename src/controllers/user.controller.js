const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Register a new user
async function registerUser (req, res) {
  const { userName, email, password } = req.body;
  
  const user = await User.findOne({ email });
  const name = await User.findOne({ userName });
  if (user || name) return res.status(400).json({ message: 'The email or username already exists' });
  try {
    const newUser = new User({
      userName,
      email,
      password
    });
    await newUser.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
}

// login a user
async function loginUser (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign(
        {
          userName: user.userName,
          email: email
        }, 'secret'
      )
      return res.status(200).json({ message: 'User logged', user: token });
    }
    else res.status(400).json({ message: 'Error', user: false });
    
  } catch (error) {

    res.status(500).json({ msg: 'Error', error });
    console.log(error);
  }
}

// get all the users
async function getAllUsers (req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  }
  catch (error) {
    res.status(500).json({ msg: 'Error', error });
    console.log(error);
  }
}

module.exports = {
  registerUser,
  getAllUsers,
  loginUser
}