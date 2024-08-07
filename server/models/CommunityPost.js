const mongoose = require('mongoose');

const CommunityPostSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: String,
    dateValue: Date,
});

module.exports = mongoose.model('CommunityPost', CommunityPostSchema);
