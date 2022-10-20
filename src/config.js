require('dotenv').config();

// Express and Mongoose variables
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
// Cloudinary variables
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

module.exports = {
  PORT,
  MONGO_URI,
  CLOUD_NAME,
  API_KEY,
  API_SECRET
};