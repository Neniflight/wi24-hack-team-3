const express = require('express');
const router = express.Router();
const User = require('../models/user.js'); // Importing the User model
const multer = require('multer'); 
const s3 = require('../s3'); // Importing the S3 module

const upload = multer();

/* GET users listing. */
router.get('/users', async (req, res, next) => {
  // const user = {
  //   name: 'ACM Hack',
  //   email: 'hack@acmucsd.org'
  // }
  // res.status(200).json({ user });
  try {
    const users = await User.find(); // fetch all users from the database
    res.status(200).json(users);

  } catch (error) {
    console.error(error);

    res.status(500).send({ message:error.message });
  }
});

// Get a specific user with id
router.get('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);
    res.status(500).send({ message:error.message });
  }
});

//Create a user
router.post('/user/create', async(req,res) => {
  try {
    const {username, email, password, firstName, lastName, bio} = req.body;

    console.log(req.body)

    profilePicURL = null;

        if (req.file) {
            // Upload image to S3 and get image URL
            profilePicURL = await s3.uploadToS3(req.file);
          }

    console.log(profilePicURL)
  
    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).send('Fill out all fields')
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send('User already exists');
    }

    const user = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      profilePicURL: profilePicURL
    }

    const newUser = await User.create(user);

    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      bio: newUser.bio
    };
    res.status(201).json(userResponse);

  } catch (error) {
    return res.status(500).send({message:error.message})
  }

})

//Delete an user
router.delete('/:id', async(req, res)=>{
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if(!deletedUser){
      return res.status(404).send({message: 'User not found'});//Error handling
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.log(error)
    res.status(500).send({message: error.message});//Error handling
  }
});

//Update an user with new username, email, or password
router.put('/:id', async(req, res)=>{
  try {
    const userId = req.params.id;
    const updateFields = req.body; //Array of specific field(s) in user

    let user = await User.findById(userId);

    if(!user){
      return res.status(404).send({message: 'User not found'});//Error handling
  }
    for (let field in updateFields){
      user[field] = updateFields[field]; //Update specific field
    }

    user = await user.save() //Save updated user in database
    res.json({ message: 'User updated successfully', user });

  } catch (error) {//Error handling
    console.log(error)
    res.status(500).send({message: error.message});
  }
});

module.exports = router;

