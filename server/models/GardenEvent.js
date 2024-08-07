const mongoose = require('mongoose');

const GardenEventSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    eventName: String,
    location: String,
    description: String,
    dateValue: Date,
});

module.exports = mongoose.model('GardenEvent', GardenEventSchema);
