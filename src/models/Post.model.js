const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  photo: {
    url: String,
    public_id: String,
    required: false
  },
  userName: {
    type: String,
    required: false
  },
  categories: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timessamps: true });

module.exports = mongoose.model('Post', PostSchema);