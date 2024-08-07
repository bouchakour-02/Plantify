// server/controllers/communityPostController.js
const CommunityPost = require('../models/CommunityPost');

exports.createPost = async (req, res) => {
    try {
        const newPost = new CommunityPost(req.body);
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await CommunityPost.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await CommunityPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await CommunityPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await CommunityPost.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
