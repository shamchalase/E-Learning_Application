const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videos: [{
        videoId: { type: String, required: true },
        title: { type: String, required: true },
        url: { type: String, required: true },
        order: { type: Number, required: true },
    }],
});

module.exports = mongoose.model('Course', courseSchema);
