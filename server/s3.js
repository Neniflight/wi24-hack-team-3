const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKeyId: process.env.SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: process.env.REGION,
  credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
  },
});


// Function to upload image to S3
const uploadToS3 = async (file) => {
  const params = {
    ACL: 'public-read',
    Bucket: process.env.BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
  };

  return s3.upload(params).promise().then((data) => data.Location);
};

module.exports = { uploadToS3 };
