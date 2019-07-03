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
    identify: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'holder.png'
    },
    idNumber: {
        type: String,
        required: true,
        unique: true
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
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
