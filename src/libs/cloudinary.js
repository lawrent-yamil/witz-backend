const { v2 } = require('cloudinary');
const { CLOUD_NAME, API_KEY, API_SECRET } = require('../config')
// Configure cloudinary
v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});

const uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: 'posts'
  });
}

const deleteImage = async (publicId) => {
  return await v2.uploader.destroy(publicId, {
    folder: 'posts'
  });
}

module.exports = {
  uploadImage,
  deleteImage
}