const express = require('express');
const router = express.Router();
const { Post } = require('../models/post');
const authenticateToken = require('../middleware/tokenAuth'); 


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
router.get('/user/:userId', authenticateToken, async (req, res) => {
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
router.get('/:id', authenticateToken, async (req, res) => {
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
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { userId, description } = req.body;

        if (!userId || !description) {
            return res.status(400).send('UserId or description not found');
        };

        const post = { 
            userId: userId, 
            description: description 
        }

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
        res.status(500).send({message: error.message});
    }
});

module.exports = router;
