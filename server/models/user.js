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
        firstName : {
            type: String,
            required: true,
        },
        lastName : {
            type: String,
            required: true,
        },
        bio : {
            type : String,
        },
        password : {
            type: String,
            required: true,
        },      
        profilePicURL: {
            type: String,
        }
    }
);

const User = mongoose.model('User', UserSchema); 


module.exports = {User};