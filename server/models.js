const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,  
        },
        password : {
            type: String,
            required: true,
        }
    }
);

const User = mongoose.model('User', UserSchema); 

const EntrySchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            required: true,
        },
        entryText: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = {Entry, User};