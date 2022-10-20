const mongoose = require('mongoose');

/* Getting the MongoDB URI from the environment variables. */
const { MONGO_URI } = require('./config');

/* Connecting to the MongoDB database. */
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = mongoose;