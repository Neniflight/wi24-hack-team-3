const express = require('express');
const router = express.Router();
const {Post} = require('../models/post'); // Importing the Post model

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
router.post('/', async (req, res) => {
    try {
        const { userId, description } = req.body;

        if (!userId || !description) {
            return res.status(400).send('Fill out all fields');
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

// Delete a post
router.delete('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(id);
        if(!deletedPost){
            return res.status(404).send({message: 'Post not found'});
        }
        res.json({message: 'Post deleted successfully', deletedPost});
    } catch (error){
        res.status(500).send({message: 'Failed to delete'})
    }

})

module.exports = router;
