const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    firstName: String,
    lastName: String,
    location: String,
    preferences: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
