import axios from 'axios';

const serverURL = `http://localhost:${process.env.PORT}`;

const API =  {
    getUsers: function() {
        return axios.get(`${serverURL}/users/`);
    },
    getUser: function(id) {
        return axios.get(`${serverURL}/users/${id}`);
    },
    createUser: function(payload) {
        return axios.post(`${serverURL}/users/`, payload);
    },
    deleteUser: function(id) {
        return axios.delete(`${serverURL}/users/${id}`);
    },
    updateUser: function(id, payload) {
        return axios.put(`${serverURL}/users/${id}`, payload);
    },
    getPosts: function() {
        return axios.get(`${serverURL}/posts/`);
    },
    getPostsFromUser: function(id) {
        return axios.get(`${serverURL}/posts/${id}`);
    },
    createPost: function(payload) {
        return axios.post(`${serverURL}/posts/`, payload);
    },
    deletePost: function(id) {
        return axios.delete(`${serverURL}/posts/${id}`);
    },
    uploadUserImage: function(file, id) {
        return axios.put(`${serverURL}/users/${id}/image`, file);
    },
    uploadPostImage: function(file, id) {
        return axios.put(`${serverURL}/users/${id}/image`, file);
    },
    userLogin: function() {
        return axios.put(`${serverURL}/users/login`);
    },
    postLogin: function() {
        return axios.put(`${serverURL}/posts/login`);
    },

}

export default API;