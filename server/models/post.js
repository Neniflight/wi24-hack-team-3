const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = {Post};
