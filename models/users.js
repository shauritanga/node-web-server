const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    },
    region: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});