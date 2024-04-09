const express = require('express');
const router = express.Router();
const {Post} = require('../models/post'); // Importing the User model
const multer = require('multer'); 
const {uploadToS3} = require('../s3'); // Importing the S3 module
const upload = multer();


// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get all posts from a specific user
router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const posts = await Post.find({userId: userId});

        if (posts.length === 0) {
            return res.status(404).json({message: 'No posts found for this user'});
        }

        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get a specific post with id
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Create a post
router.post('/create', async (req, res) => {
    const {userId, description} = req.body;

        if (!userId || !description) {
            return res.status(400).send('UserId or description not found');
        };

        const post = { 
            userId: userId, 
            description: description 
        }

    if (!userId || !description) {
        return res.status(400).json({message: 'Fill out all fields'});
    }

    try {
        //const newPost = new Post({ userId, description });
        // Creating the post
        const post = {userId, description}; 
        const savedPost = await Post.create(post); 
        
        const postResponse = {
            _id: savedPost._id,
            userId: savedPost.userId,
            description: savedPost.description,
            createdAt: savedPost.createdAt,
            updatedAt: savedPost.updatedAt
        };

        res.status(201).json(postResponse); 

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.put('/:id/image', upload.single('image'), async(req, res)=>{
    const id = req.params.id
    const potentialPost = await Post.findById(id);
    if (!potentialPost) {
      return res.status(404).json({ error: "Post does not exist", id });
    }
    const postImage = await uploadToS3(req.file, id);
    const post = await Post.findByIdAndUpdate(
      id,
      { imageURL: postImage },
      { new: true }
    );
    return res.status(200).json({ post });
  });

module.exports = router;
