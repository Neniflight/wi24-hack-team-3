const express = require('express');
const router = express.Router();
const Post = require('../models/post'); // Importing the User model

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get all posts from a specific user
router.get('/posts/user/:userId', async (req, res) => {
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
router.get('/post/:id', async (req, res) => {
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
router.post('/post/create', async (req, res) => {
    const { userId, description } = req.body;

    if (!userId || !description) {
        return res.status(400).json({message: 'Fill out all fields'});
    }

    try {

        //const newPost = new Post({ userId, description });
        // Creating the post
        const post = { userId, description }; 
        const savedPost = await Post.create(post); 

        res.status(201).json(createdPost);
        
        const postResponse = {
            _id: savedPost._id,
            userId: savedPost.userId,
            title: savedPost.title,
            description: savedPost.description,
            createdAt: savedPost.createdAt,
            updatedAt: savedPost.updatedAt
          };

        res.status(201).json(postResponse); 

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;