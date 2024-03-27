const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKeyId: process.env.SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

// Function to upload image to S3
const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
  };

  const data = await s3.upload(params).promise();
  return data.Location;
};

module.exports = { uploadToS3 };
